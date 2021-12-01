const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();

//ler JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//rota
//const encripRoutes = require('./routes/encripRoutes');
//app.use('/encrip', encripRoutes);

//rota inicial
app.get('/',(req,res)=>{
    res.json({message: "Olá humano"});
})

app.listen(3000)

/*.then(()=>{
    console.log('Conectado')
    app.listen(3000)
}).catch((err)=> console.log(err));*/
