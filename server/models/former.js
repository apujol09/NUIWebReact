const mongoose = require('mongoose');
require('dotenv').config();

const formerSchema = mongoose.Schema({
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
    website:{
        type: String,
        default: ""
    },
    image:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    markAsDeleted:{
        type: Boolean
    }

})

const Former = mongoose.model('Former', formerSchema);

module.exports = { Former }