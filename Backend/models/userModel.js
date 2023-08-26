// const mongoose = require('mongoose');
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    fullname: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    profilepic: {type:Buffer, required:false},
    // Add more fields as needed
});

const Data = mongoose.model('User', userSchema);

// module.exports = Data;
export default Data;