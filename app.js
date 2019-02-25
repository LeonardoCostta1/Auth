const express = require('express');
const mongoose  = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://admin:Leocostta1@ds043487.mlab.com:43487/radio-inconfidencia',{useNewUrlParser:true});


require('./src/Model/Auth');
app.use('/api',require('./Routes'));

app.listen(3001,()=>{
console.log("SERVIDOR ON");
});