const express = require('express');
const router = express.Router();
router.use(express.json());

const { Posts } = require('../models');

//http://localhost:4000/posts/
router.get('/', async (req, res, next) => {
    try {
        const allPosts = await Posts.find({})
        res.status(201).json(allPosts)
    }catch(error){
        res.status(400).json({error: error})
    }
})


//http://localhost:4000/posts/
router.post('/', async (req, res, next) => {
    try {
        const newPost = await Post.create(req.body)
        res.status(201).json(newPost)
    }catch(error){
        res.status(400).json({error: error})
    }
});

//http://localhost:4000/posts/id
//Show
router.get('/:id', async (req, res, next ) => {
    try {
        const findPost = await Post.findById(req.params.id);
        res.status(200).json(findPost);
    } catch (error) {
        res.status(404).json({error: error})
    }
});

//http://localhost:4000/posts/id
//Delete
router.delete('/:id', async (req, res, next ) => {
    try {
        const deletePost = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json(deletePost);
    } catch(error) {
        res.status(404).json({error: error})
    } 
});

//http://localhost:4000/posts/id
//Update
router.put('/:id', async (req, res, next) => {
    try {
        const updatePost = await Post.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.status(200).json(updatePerson);
    } catch(error) {
        res.status(404).json({error: error})
    }
});
