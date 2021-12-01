const express = require('express');
const postgress = require('postgress');
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

dotenv.config();
DB_USER = process.env.DB_USER;
DB_PASSWORD = process.env.DB_PASSWORD;

const sql = postgress('postgres://username:password@host:5432/encriptador')

.then(()=>{
    console.log('Conectado')
    app.listen(3000)
}).catch((err)=> console.log(err));
