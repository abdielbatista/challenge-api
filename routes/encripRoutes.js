const router = require('express').Router();
const EncripController = require('../controllers/encrip.crotoller')


//rota inicial
router.get('/',(req,res)=>{
    res.json({message: "Olá humano"});
})

//create
router.post('/create', EncripController.create)

//search
router.get('/encripts/:id', EncripController.search)


module.exports = router