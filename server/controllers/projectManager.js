const model = require('../models');

class ProjectManager{
  constructor(){
     console.log("Project Manager");
  }
    async get(){
      console.log("Inside Project Manager");
      await model.projectManager.get();  
    }
}

module.exports = new ProjectManager();