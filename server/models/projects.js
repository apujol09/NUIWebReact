const mongoose = require('mongoose');

const projectsSchema = mongoose.Schema({
    name:{
        required: true,
        type: String,
        unique: 1,
        maxlength: 150
    },
    status:{
        type: String,
        required: true,
    },
    labs:{
        type: String,
        required: true
    },
    description:{
        type: String,
        default: "TBA"
    },
    publication:{
        type: String,
        default: ""
    },
    github:{
        type: String,
        default: ""
    },
    paper:{
        type: String,
        default: ""
    },
    website:{
        type: String,
        default: ""
    },
    image:{
        type: String
    },
    markAsDeleted:{
        type: Boolean
    }

});

const Projects = mongoose.model('Projects', projectsSchema);

module.exports = { Projects }