const express = require('express')
const mongoose = require('mongoose');
const cookieParse = require('cookie-parser');
require('dotenv').config({path: './config.env'});

const usersRouter = require('./routes/UserRoutes');

const app = express();
app.use(cookieParse());
app.use(express.json());
app.use('/api', usersRouter);

mongoose.connect(process.env.MONGODB_URI,
    { useNewUrlParser: true })
    .then(()=>{
        console.log("MongoDB Connected...")
        app.listen(3000, ()=>{
            console.log('Listening to 3000...')
        })
    })
    .catch(err => {
        console.log(err);
    });
