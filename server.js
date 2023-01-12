const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const PostsController = require('./controllers/postsController')
const UsersController = require('./controllers/usersController')

require('dotenv').config();
require('./config/db.connection')   

const { PORT }  = process.env || 4000

//middleware

app.use(cors()); 
app.use(morgan("dev")); 

app.use('/posts', PostsController);
app.use('/users', UsersController)

app.get('/posts', (req,res) => { res.redirect('/posts')});
app.get('/users', (req,res) => { res.redirect('/users')});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})