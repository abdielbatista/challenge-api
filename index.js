const express = require('express');
const pg = require('pg');
const dotenv = require('dotenv');

const app = express();

//ler JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());

dotenv.config();
DB_USER = process.env.DB_USER;
DB_PASSWORD = process.env.DB_PASSWORD;

//const connectionString = 'postgresql://${{DB_USER}}:{{DB_PASSWORD}}@host:5432/encriptador'

  const Client = new pg.Client ({
      host: 'localhost',
      database: 'encriptador',
      user: '${{DB_USER}}',
      password: '{{DB_PASSWORD}}',
      port: 5432,
    });

    app.listen(3000) 
  
