const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("config");
const database=require('./database/config');
const bodyParser = require('body-parser')
//User Imports


//Secret Key Error
//if (!config.get("jwtPrivateKey")) {
//  console.error("FATAL ERROR: secretkey not set");
//  process.exit(1);
//}

//Mongoose Connection
// mongoose
//   .connect("mongodb://localhost/projectPortal", { useNewUrlParser: true })
//   .then(() => console.log("MongoDb connected"))
//   .catch(err => console.error("Error occured while connecting to db", err));

//Using Middlewares
app.use(cors());
app.use(express.json());
const employeeRoutes = require("./routes/employee");
app.use("/api/employee", employeeRoutes);
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
app.use(function (req, res, next) {
  res.setHeader('Content-Type', 'application/json')
  next();
})
 
// parse application/json

require("./routes/route.js")(app);

//Adding Routes


//Listening and setting of port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening at port ${port}`));
