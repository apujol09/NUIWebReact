const mongoose = require('mongoose');

const publicationsSchema = mongoose.Schema({
    name:{
        required: true,
        type: String,
        unique: 1,
        maxlength: 5000
    },
    links:{
        type: [],
        default: []
    },
    category:{
        type: String,
        required: true
    },
    created_at:{ 
        type: Date, 
        required: true, 
        default: Date.now 
    },
    markAsDeleted:{
        type: Boolean
    }

});

const Publications = mongoose.model('Publications',publicationsSchema);

module.exports = { Publications }