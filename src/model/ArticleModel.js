const mongoose = require('mongoose');
const {Schema} = mongoose;

const commentSchema = new Schema({
    user: {
        type: String,
        required: true
    },

    comments: {
        type: String,
        required: true
    }
})

const moreSchema = new Schema({
    reading_time: { type: String, required: true},

})

const ArticleSchema = new Schema({
    menuId: {
        type: Number, 
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    tags: [String],

    comments: {
        type: [commentSchema]
    },
      
})

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article

