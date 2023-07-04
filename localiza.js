const express = require('express');
const app = express();
app.use(express.static('public'))

//selecionadno o motor de html para o express exibir, ele basicamente pega uma rquivo html e torna legivel para o nosso servidor
app.set('view engine', 'ejs');

//exportar vinculo com banco de dados
const db = require("./bancoDeDados/db");


app. get("/", async (req, res) =>{
    res.render("pesquisa", {
    });
})
app. get("/registro", async (req, res) =>{
    res.render("LocalRegistro", {
    });
})
app. get("/local/:id/:nome", async (req, res) =>{
    var id = req.params.id;
    var nome = req.params.nome;
    res.render("Local", {
        id: id,
        nome: nome
    });
})

app.post("/upload", async (req, res) =>{
    var  nome= req.body.nome;
    var  longitude= req.body.longitude;
    var  latitude= req.body.latitude;
    var  origem= req.body.origem;
    var  andar= req.body.andar;
    var  tipo= req.body.tipo;
    var  setor= req.body.setor;
    var  portao= req.body.portao;
    
        await db.insertLocais(nome, longitude, latitude, andar, tipo, setor, portao);
    res.render("LocalRegistro")
})
app.listen(8080, () => {
    console,console.log(" servidor na porta 8080: http://localhost:8080");
});