# facile-challenge

Desafio técnico e criativo da Facile - Soluções em Sistemas com objetivo de avaliar como organizo meu código (arquitetura de pastas), meu raciocínio lógico, uso de padrões, construção de componentes, e como as tecnologias foram utilizadas.

## Dependencies
    "crypto": "^1.0.1",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "mongoose": "^6.0.14",
    "nodemon": "^2.0.15",
    "pg": "^8.7.1",
    "postgres": "^1.0.2"

## Banco PostgresSQL

```sql
CREATE TABLE data(
    id SERIAL PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
    crypto TEXT NOT NULL
);
```

## Heroku

O projeto foi enviado para o Heroku, onde é possível realizar o deploy apartir do link em um serviço de testes similar ao Postman: https://facile-challenge-abd.herokuapp.com

## Create

<div align="center">
<img src="https://gitlab.com/abdiel_batista/facile-challenge/uploads/827eb5d05fa7c49fee5868e83c35b033/create.jpg" width="700px" />
</div>


## Retorno de erro:

Caso o usuário não informe nenhum valor para a string, ou digite a sintaxe de forma errada, a API retornara o seguinte erro:

<div align="center">
<img src="https://gitlab.com/abdiel_batista/facile-challenge/uploads/592637e3fe76f7e76df54e67e1fab376/Captura_de_tela_2021-12-02_154530.jpg" width="700px" />
</div>

## Consulta

É possivel fazer buscas por registros também, é utilizado a rota: "localhost:3000/encripts/1" ou https://facile-challenge-abd.herokuapp.com/encripts/1 (se ultilizado o Postman e Heroku) onde o último parâmetro da rota será o id a ser buscado no banco

<div align="center">
<img src="https://gitlab.com/abdiel_batista/facile-challenge/uploads/36a575753b27ee25d3548a163438b1a3/encripts.jpg" width="700px" />
</div>

