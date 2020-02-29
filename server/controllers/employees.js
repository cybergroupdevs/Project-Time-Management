const model = require("../models");
const schema = require("../schemas")

class Employee {
  constructor() {
    //
    console.log("controllers me hu");
  }

  async create(req, res) {
    let employeeObj = {
      empId:req.body.empId,
      name: req.body.name,
      phoneNo: req.body.phone,
      email: req.body.email,
      designation: req.body.designation,
      password: req.body.password,
      address:req.body.address,
      role:req.body.role
    };
    const employee = await model.employee.save(employeeObj);
    console.log("running",employee);
    res.send(employee);
  }

  async index(req, res) {
    const employeeList = await model.employee.log({},{"name":1,
                                                     "designation":1,
                                                      "email":1});
    res.send(employeeList);
  }

  async show(req, res) {
    const employeeList = await model.employee.get({ _id: req.params.id });
    res.send(employeeList);
  }



async update(req, res) {
  let employeeUpdatedObj = {
    empId:req.body.empId,
    name: req.body.name,
    phoneNo: req.body.phone,
    email: req.body.email,
    designation: req.body.designation,
    password: req.body.password,
    address:req.body.address,
   
  };
    const employee = await model.employee.update(
      { _id: req.params.id },employeeUpdatedObj );
    res.send(employee);
  }

  async delete(req, res) {
    console.log("running")
    const employee = await model.employee.delete({ _id: req.params.id });
    res.send(employee);
  }
}
module.exports = new Employee();
