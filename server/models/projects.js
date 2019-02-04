const mongoose = require('mongoose');

const projectsSchema = mongoose.Schema({
    name:{
        required: true,
        type: String,
        unique: 1,
        maxlength: 100
    }
});

const Projects = mongoose.model('Projects', projectsSchema);

module.exports = { Projects }