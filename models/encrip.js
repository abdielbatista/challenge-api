const express = require('express');
const app = express();

app.post('/encrip', (req,res)=>
{
    res.json({requestBody: req.body})
})

//npm kripto require