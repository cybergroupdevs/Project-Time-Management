const mongoose=require('mongoose');
const schema=require('../schemas');
const projectschema=mongoose.Schema(schema);
class Project{
  constructor(){
    this.model=mongoose.model('Project',projectschema);
  }
  
     //get the projects of company as per criteria
      async get(criteria={},columns={}){
        return this.model.findOne(criteria,columns={});
    }
    //save the newly created project 
      async save(projectObj){
        console.log(projectObj, ' created new project!');
        const project = await this.model.create(projectObj);
          return project;
         
     }
     //update the details of project as per criteria
      async update(criteria={},updatedProjectObj){
         return this.model.update(criteria,updatedProjectObj)
      }
      //delete the project of company as per criteria 
      async delete(criteria={}){
        return this.model.deleteOne(criteria);
     }
     //display all the projects of company
     async log(criteria={}){
          return this.model.find(criteria);
     }
}

module.exports=new Project();