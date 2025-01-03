const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
name: String,
email: String,
password: String,
role: {
    type: String,
    enum: ['receptionist','manager','admin'],
    default: 'receptionist'
},
createAt: {
    type: Date,
    default: Date.now
},
updatedAt: {
    type: Date,
    default: Date.now
}
})

module.exports=mongoose.model("user",userSchema,"users")