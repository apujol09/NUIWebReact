const mongoose = require('mongoose');

const publicationCategoriesSchema = mongoose.Schema({
    name:{
        required: true,
        type: String,
        unique: 1,
        maxlength: 100
    },
    priority:{
        type: Number,
        required: true
    }

});

const PublicationCategories = mongoose.model('PublicationCategories',publicationCategoriesSchema, 'publicationCategories');

module.exports = { PublicationCategories }