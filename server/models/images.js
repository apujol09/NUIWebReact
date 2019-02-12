const mongoose = require('mongoose');

const imagesSchema = mongoose.Schema({
    img:{ 
        data: Buffer, 
        contentType: String 
    }
});

const Images = mongoose.model('Images', imagesSchema);

module.exports = { Images }