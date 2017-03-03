var mongoose = require('mongoose');

var studentSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
    type:String,
    required:true,
  }
})

var Project = mongoose.model("students", studentSchema);

module.exports = Project;
