const model = require("../models");

class Project {
  constructor() {}

  async create(req, res) {
    console.log("Create Project req.body",req.body);
    let projectObj = {
      projectId: req.body.projectId,
      projectName: req.body.projectName,
      projectManager: req.body.projectManager,
      clientName: req.body.clientName,
      status: req.body.status,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      empObjectIdArray: req.body.empIdArray,
      status: req.body.status
    };

    if(await model.project.get({ projectId: projectObj.projectId })) return res.status(400).send({
      success: false,
      payload: {
        message: 'Project Id already exists'
      }
    });

    const empObjectIdArray = [];

    const generateProjectPromise = async () => {
      await Promise.all(
        projectObj.empObjectIdArray.map(async empId => {
          const { _id } = await model.employee.get(
            { empId }
          );

          console.log(_id, 'Before Push in empObjectIdArray');
          empObjectIdArray.push(_id);
        })
      );

      const newProject = await model.project.save({ ...projectObj, empObjectIdArray });
      console.log(newProject);

      return newProject;
    };

    console.log(empObjectIdArray);

    const newProjectId = (await generateProjectPromise())._id;

    const employeesUpdatePromise = async () => {
      await Promise.all(
        empObjectIdArray.map(async empObjectId => {
          await model.employee.update(
            { _id: empObjectId },
            { $push: { projectId: newProjectId } }
          );
        })
      );
    };

    await employeesUpdatePromise();

    const projectManagerId = (await model.employee.find({ empId: projectObj.projectManager }))._id;
    model.projectManager.save({ managerId: projectManagerId, employeeId: empObjectIdArray, projectId: newProjectId });

    res.status(201).send({
      success: true,
      payload: {
        message: "Project created successfully"
      }
    });
  } 
    
  async index(req, res) {
    const projectList = await model.project.log({});
    res.send(projectList);
  }

  async show(req, res) {
    const projectList = await model.project.get({ _id: req.params.id });
    res.send(projectList);
  }
  async update(req, res) {
    //Expecting that req.body will have required details with same keys!!! (Just to save time)
    const project = await model.project.update(
      { _id: req.body.id },
      { $set: { ...req.body } }
    );
    res.send({
      success: true,
      payload: {
        project
      }
    });
  }

  async delete(req, res) {
    console.log("running");
    const project = await model.project.delete({ _id: req.params.id });
    res.send(project);
  }
}
module.exports = new Project();
