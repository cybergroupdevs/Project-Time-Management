const login=require('./loginController');
const employees = require('./employees');
const timesheet = require('./timesheet');
const projects=require('./project');
module.exports =
{    login : login,
    employees : employees,
    timesheet: timesheet,
    projects:projects
}