const router = require('express').Router();
const EncripController = require('../controllers/encrip.crotoller')


//rota inicial
router.get('/',(req,res)=>{
    res.json({message: "Olá humano"});
})

//insert
router.post('/create', EncripController.create)

module.exports = router