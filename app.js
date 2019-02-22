const express = require('express');
const mongoose  = require('mongoose');
const app = express();

mongoose.connect('mongodb://admin:Leocostta1@ds043487.mlab.com:43487/radio-inconfidencia',{useNewUrlParser:true});

app.get('/',(req,res)=>{

    res.send('TUDO OK');
})

require('./src/Model/Auth');
app.listen(3001,()=>{
console.log("SERVIDO ON");
});