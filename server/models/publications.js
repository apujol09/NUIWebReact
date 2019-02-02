const mongoose = require('mongoose');

const publicationsSchema = mongoose.Schema({
    name:{
        required: true,
        type: String,
        unique: 1,
        maxlength: 100
    }
});

const Publications = mongoose.model('Publications',publicationsSchema);

module.exports = { Publications }