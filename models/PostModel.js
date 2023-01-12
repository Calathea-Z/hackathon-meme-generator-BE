const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema({
    image: String,
    bottomText: String,
    topText: String,
    likedBy: [String],
    totalLikes: Number,
}, {timestamps: true});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;