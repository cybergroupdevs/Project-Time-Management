const mongoose = require("mongoose");
var ObjectId = mongoose.Schema.Types.ObjectId;
const employee = require("./employee");
module.exports = {
  projectName: {
    type: String,
    default: null
  },
  projectManager: {
    type: String,
    default: null
  },
  clientName: {
    type: String,
    default: null
  },
  startDate: {
    type: String,
    default: null
  },
  endDate: {
    type: String,
    default: null
  },
  empObjectIdArray: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "employee" }],
    unique: true
  },
  status: {
    type: String,
    enum: ["Completed", "Discarded", "In progress"]
    //    required:true
  }
};
