const express = require('express');
const mongoose = require('mongoose');
const app = express();  
const bodyparser = require('body-parser')
app.use(bodyparser.json())
const cors = require("cors")
app.use(cors());

//routes
app.get('/',(req, res) => {

});

const Bisecapi = require('./routes/Bisecapi')
const Falseapi = require('./routes/Falseapi')
const Oneapi = require('./routes/Oneapi')
const Newtonapi = require('./routes/Newtonapi')
const Canapi = require('./routes/Canapi')

app.use('/Bisecapi',Bisecapi);
app.use('/Falseapi',Falseapi);
app.use('/Oneapi',Oneapi);
app.use('/Newtonapi',Newtonapi);
app.use('/Canapi',Canapi);


mongoose.connect('mongodb+srv://max:maxhot4610@cluster0-k7nla.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true,userMongoClient:true}) 
console.log('HI connected DB')

app.listen(8000);