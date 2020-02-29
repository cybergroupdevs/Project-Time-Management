const controller = require('../controllers');

module.exports= (app) => {
	
	app.post("/login", controller.login.checkUserAuthentication);
	app.get("/employees",controller.employees.index);
	app.post("/employees",controller.employees.create);
	app.put("/employees/:id",controller.employees.update);
	app.delete("/employees/:id",controller.employees.delete);
	app.get("employees/:id",controller.employees.show);
	app.get("/projects",controller.projects.index);
	app.post("/projects",controller.projects.create);
	app.get("/projects/:id",controller.projects.show);
	app.put("/projects/:id",controller.projects.update);
	app.delete("/projects/:id",controller.projects.delete);
}