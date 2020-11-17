const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors= require('cors');
require('dotenv/config');

app.use(bodyParser.json());
app.search(cors());
/*
//middlewares function that executes when routes are being hit
app.use('/posts', ()=> {
    console.log("this is a middleware running");
});*/

//import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});



//connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true } , 
    () => console.log('connected to DB'));


//SERVER LISTENING
app.listen(3000);