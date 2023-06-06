const express = require('express');
const app = express();

//selecionadno o motor de html para o express exibir, ele basicamente pega uma rquivo html e torna legivel para o nosso servidor
app.set('view engine', 'ejs');

//acessando o banco de dados atras de um import do arquivo db.js aonde o vinculo foi criado
const db = require('./models/db')

app.use(express.static('public'))

app. get("/", async (req, res) =>{
    res.render("pesquisa", {
    });
})
app. get("/local/:id/:nome", async (req, res) =>{
    var id = req.params.id;
    var nome = req.params.nome;
    res.render("pesquisa", {
        id: id,
        nome: nome
    });
})
app.listen(8080, () => {
    console,console.log(" servidor na porta 8080: http://localhost:8080");
});