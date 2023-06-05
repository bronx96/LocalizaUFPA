const express = require('express');
const app = express();

//selecionadno o motor de html para o express exibir, ele basicamente pega uma rquivo html e torna legivel para o nosso servidor
app.set('view engine', 'ejs');

//acessando o banco de dados atras de um import do arquivo db.js aonde o vinculo foi criado
const db = require('./models/db')

app. get("/", async (req, res) =>{
    res.render("LocalRegistro");
})
app.listen(8080, () => {
    console,console.log(" servidor na porta 8080: http://localhost:8080");
});