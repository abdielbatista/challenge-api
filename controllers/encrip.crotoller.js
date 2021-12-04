const Encrip = require("../models/Encrip");
const Crypto = require("../services/crypto");
const pg = require("../database/postgresql").pool;
const app = require("express");

module.exports = {
  async create(req, res) {
    try {
      const { name } = req.body;
      //console.log(name);

      if (!name) {
        return res.status(422).json({
          code: "E_VALIDATION_FAILURE",
          message: 'O campo "name" é obrigatório',
        });
      }

      const cryptoName = Crypto.encrypt(name);
      var c = Crypto.encrypt(name);
      

      const text = "INSERT INTO data(crypto) VALUES($1) RETURNING *";
      const values = [JSON.stringify(c)];
      

      // callback
      pg.query(text, values, (err, res) => {
        if (err) {
          //console.log(err.stack);
        } else {
          //console.log(res.rows[0]);
        }
      });

      const query = {
        name: "create",
        text: "SELECT id FROM data WHERE name = $1",
        values: [c],
      };

      // callback
      pg.query(query, (err, res) => {
        if (err) {
          console.log(err.stack);
        } else {
          console.log(res.rows[0]);
        }
      });

      res.status(201).json({ id: "teste", encripted_name: c["content"] });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },


  //search
  async search(req, res) {
    const id = req.params.id;
    let idsearch;

    try {
      const query = {
        name: "search",
        text: "SELECT crypto FROM data WHERE id = $1",
        values: [id],
      };

      // callback
      let r = await pg.query(query["text"], query["values"]);

      //console.log(r);
      //var c = Crypto();
      //let c = Crypto.decrypt(hash);

      const hash = JSON.parse(r.rows[0].crypto);
      console.log(hash);

      c = Crypto.decrypt(hash);
      

      //console.log(idsearch);
      res.status(201).json({ "name": c});
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
};

//seach
