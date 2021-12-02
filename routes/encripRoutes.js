const router = require('express').Router();
const {aplication} = require('express');
const EncripController = require('../controllers/encrip.crotoller')


//rota inicial
app.get('/',(req,res)=>{
    res.json({message: "Olá humano"});
})


//insert
router.post('/create', EncripCrotoller.create)

module.exports = router