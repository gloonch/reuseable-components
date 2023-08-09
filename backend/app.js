const express = require('express')
const mongoose = require('mongoose');
const cookieParse = require('cookie-parser');
require('dotenv').config({path: './config.env'});
const cors = require('cors')

const usersRouter = require('./routes/UserRoutes');

const app = express();
app.use(cors({credentials: true, origin: "http://localhost:3000"}))
app.use(cookieParse());
app.use(express.json());
app.use('/api', usersRouter);

mongoose.connect(process.env.MONGODB_URI,
    { useNewUrlParser: true })
    .then(()=>{
        console.log("MongoDB Connected...")
        app.listen(4000, ()=>{
            console.log('Listening to 4000')
        })
    })
    .catch(err => {
        console.log(err);
    });
