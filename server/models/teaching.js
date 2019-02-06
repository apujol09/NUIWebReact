const mongoose = require('mongoose');

const teachingsSchema = mongoose.Schema({
    name:{
        required: true,
        type: String,
        unique: 1,
        maxlength: 100
    },
    link:{
        type: String,
        default: ''
    },
    code:{
        type: String,
        required: true,
        unique: 1

    },
    description:{
        type: String,
        required: true,
        maxlength: 10000
    },
    semester:{
        type: String,
        required: true
    },
    time:{
        type: String,
        default: "TBA"
    }
});

const Teaching = mongoose.model('Teaching', teachingsSchema, 'teaching');

module.exports = { Teaching }