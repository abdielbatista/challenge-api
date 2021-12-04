//const Encrip = require("../models/Encrip");
const Crypto = require("../services/crypto");
const pg = require("../database/postgresql").pool;
const app = require("express");

module.exports = {
  async create(req, res) {
    try {
      const { name } = req.body;

      if (!name) {
        return res.status(422).json({
          code: "E_VALIDATION_FAILURE",
          message: 'O campo "name" é obrigatório',
        });
      }

      const cryptoName = Crypto.encrypt(name);
      var hash = Crypto.encrypt(name);
      
      const text = "INSERT INTO data(crypto, name) VALUES($1, $2) RETURNING *";
      const values = [JSON.stringify(hash), name];
      

      // callback
      const teste = pg.query(text, values, (err, res) => {
        if (err) {
          console.log(err.stack);
        } else {
          console.log(res.rows[0]);
        }
      });
     
      const query = {
        name: "create",
        text: "SELECT id FROM data WHERE name = $1",
        values: [name],
      };

      //callback
      let call = await pg.query(query["text"], query["values"]);

      res.status(201).json({ id: call.rows[0].id, encripted_name: c["content"] });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },


  //search
  async search(req, res) {
    const id = req.params.id;

    try {
      const query = {
        name: "search",
        text: "SELECT crypto FROM data WHERE id = $1",
        values: [id],
      };

      // callback
      let id_user = await pg.query(query["text"], query["values"]);

      const hash = JSON.parse(id_user.rows[0].crypto);

      decryp = Crypto.decrypt(hash);
      
      res.status(201).json({ "name": decryp});
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
};

