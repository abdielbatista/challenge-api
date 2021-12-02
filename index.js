const express = require('express');
const app = express('express')
const pg = require('./database/postgresql').pool;
const routes = require('./routes/encripRoutes')

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(routes);
app.listen(process.env.PORT || 3000);


/*
pg.query("SELECT * FROM public.data ORDER BY id ASC", (error, res)=>{
    console.log(error, res);
    pg.end;
});*/

//ler JSON





  
