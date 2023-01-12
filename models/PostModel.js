const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    image: String,
    bottomText: String,
    topText: String,
    likedBy: [String],
    totalLikes: Number,
}, {timestamps: true});


module.exports = mongoose.model("Posts", PostsSchema)