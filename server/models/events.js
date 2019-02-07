const mongoose = require('mongoose');

const eventsSchema = mongoose.Schema({
    name:{
        required: true,
        type: String,
        unique: 1,
        maxlength: 100
    },
    date:{
        type: String,
        required: true
    },
    time:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    presentation:{
        type: String,
        default: ""
    },
    powerpoint:{
        type: String
    },
    video:{
        type: String
    },
    class:{
        type: String
    },
    image:{
        type: String
    }
});

const Events = mongoose.model('Events', eventsSchema, 'events');

module.exports = { Events }