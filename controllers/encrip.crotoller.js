const Encrip = require("../models/Encrip");
const Crypto = require("../services/crypto")
const app = require('express');

module.exports = {
  async create(req, res) {
    try {
      const { name } = req.body;
      //console.log(name);

      if (!name) {
        return res.status(422).json({
            code: "E_VALIDATION_FAILURE",
            message: "O campo \"name\" é obrigatório"
        });
      }

      const cryptoName = Crypto.encrypt(name);
      var c = Crypto.encrypt(name);
      //console.log(cryptoName);
      //return;

      //await Encrip.insert(encrip);
      
      //console.log

      res.status(201).json({ id: "teste", 
                             encripted_name:  c });

    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
};
