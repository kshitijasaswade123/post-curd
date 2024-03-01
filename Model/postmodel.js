const mongoose = require('mongoose');
const postModel = new mongoose.Schema({
    
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author_id:{
        type:Number,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now()
    }

})


module.exports = mongoose.model('postModel', postModel);