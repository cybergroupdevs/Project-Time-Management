const model = require("../models");
//const schema = require("../schemas")

class Project {
  constructor() {
    
    console.log("controllers me hu");
  }

  async create(req, res) {
    try{
    let projectObj = {
     
      projectName:req.body.projectName,
       projectManager:req.body.projectMananger,
       clientName:req.body.clientName,
      //  status:req.body.status,
    //  startDate:req.body.startDate,
   //endDate:req.body.endDate
       empId:req.body.empId
   
   };
   
    
  
     const project = await model.project.save(projectObj);

     console.log("running",project);
  
     res.status('200').send(project);
     debugger
  }
 
  catch(error){
    console.log(error);
  }
}

  async index(req,res) {
    
    const projectList = await model.project.log({});
    res.send(projectList);
  }

  async show(req, res) {
    const projectList = await model.project.get({ _id: req.params.id });
    res.send(projectList);
  }
async update(req, res) {
    const project = await model.project.update(
      { _id: req.params.id },
      { $set: { projectName: req.body.projectName} }
    );
    res.send(project);
  }

  async delete(req, res) {
    console.log("running")
    const project = await model.project.delete({ _id: req.params.id });
    res.send(project);
  }
}
module.exports = new Project();