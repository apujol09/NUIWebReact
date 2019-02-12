const mongoose = require('mongoose');
require('dotenv').config();

const facultyCSUSchema = mongoose.Schema({
    name:{
        type:String,
        required: true,
        maxlength: 100
    },
    education:{
        type: String,
        required: true,
    },
    major:{
        type: String,
        required: true
    },
    position:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true,
        trim: true,
        unique: 1
    },
    university:{
        type: String,
        required: true
    },
    cv:{
        type: String,
    },
    website:{
        type: String,
    },
    image:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})

const FacultyCSU = mongoose.model('FacultyCSU', facultyCSUSchema, 'FacultyCSU');

module.exports = { FacultyCSU }