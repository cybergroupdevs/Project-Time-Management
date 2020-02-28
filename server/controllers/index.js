const login=require('./loginController');
const employees = require('./employees');
const projects=require('./project')
module.exports =
{    login : login,
    employees : employees,
    projects:projects
}