const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const UsersController = require('./controllers/UsersController');
const PostsController = require('./controllers/PostsController');

require('dotenv').config();
require('./config/db.connection')   

const { PORT } = process.env;

//middleware

app.use(cors()); //allows for cross origin requests;

app.use(morgan("dev")); //allows for easy logging for devlopment

app.use('/posts', PostsController);

app.use('/users', UsersController);

app.get('/', (req,res) => { res.redirect('/posts')});

app.listen(process.env.PORT || 4000);