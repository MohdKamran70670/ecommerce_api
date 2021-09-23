const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();

const app = express();

//app.use('/', justTest);

app.get('/', (req, res)=>{
    res.status(200).json('Server created')
})

mongoose.connect(process.env.MONGO_URL)
    .then((db)=>console.log(`MongoDB Database connected ${process.env.MONGO_URL}.`))
    .catch((err)=>console.log('Database not connected.'))

const port = process.env.PORT || 4003

app.listen(port,()=>console.log(`MongoDB Database connected on Pory: ${port}.`))