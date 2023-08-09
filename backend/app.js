const express = require('express')
const mongoose = require('mongoose');
const cookieParse = require('cookie-parser');
require('dotenv').config({path: './config.env'});
const cors = require('cors')

const usersRouter = require('./routes/UserRoutes');

const app = express();
app.use(cors())
app.use(cookieParse());
app.use(express.json());
app.use('/api', usersRouter);

mongoose.connect(process.env.MONGODB_URI,
    { useNewUrlParser: true })
    .then(()=>{
        console.log("MongoDB Connected...")
        app.listen(3001, ()=>{
            console.log('Listening to 3001...')
        })
    })
    .catch(err => {
        console.log(err);
    });
