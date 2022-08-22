
const mongoose = require('mongoose')
const EmployeeSchema = mongoose.Schema({
    //-----------------------------This is my Schema Dude--------------------------------
    employeeid:{
        type:Number,
        default: 0
      },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true  
    },
    phoneNo: {
        type: Number,
        required: true 
    },
    salary: {
        type: Number,
        required: true
    },
    comment:{
        type:String,
        required:true
    }

})
module.exports = mongoose.model('employee',EmployeeSchema)

