const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const postsController = require('./controllers/postsController')
const usersController = require('./controllers/usersController')

require('dotenv').config();
require('./config/db.connection')   

const { PORT } = process.env;

//middleware

app.use(cors()); 

app.use(morgan("dev")); 

app.use('/posts', postsController);

app.use('/users', usersController)

app.get('/', (req,res) => { res.redirect('/people')});

app.listen(PORT, () =>console.log(`Listening on port: ${PORT}`));