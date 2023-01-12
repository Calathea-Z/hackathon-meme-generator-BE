const express = require('express');
const router = express.Router();
router.use(express.json());

const { User } = require('../models');

//http://localhost:4000/users/
//index
router.get('/', async (req, res, next) => {
    try {
        const allUsers = await User.find({})
        res.status(201).json(allUsers)
    }catch(error){
        res.status(400).json({error: error})
    }
})

//http://localhost:4000/users/
//Post
router.post('/', async (req, res, next) => {
    try {
        const newUser = await User.create(req.body)
        res.status(201).json(newUser)
    }catch(error){
        res.status(400).json({error: error})
    }
});

//http://localhost:4000/users/id
//Show
router.get('/:id', async (req, res, next ) => {
    try {
        const findUser = await User.findById(req.params.id);
        res.status(200).json(findUser);
    } catch (error) {
        res.status(404).json({error: error})
    }
});

//http://localhost:4000/users/id
//Delete
router.delete('/:id', async (req, res, next ) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteUser);
    } catch(error) {
        res.status(404).json({error: error})
    } 
});

//http://localhost:4000/users/id
//Update
router.put('/:id', async (req, res, next) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.status(200).json(updateUser);
    } catch(error) {
        res.status(404).json({error: error})
    }
});
