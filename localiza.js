const express = require('express');
const app = express();

//selecionadno o motor de html para o express exibir, ele basicamente pega uma rquivo html e torna legivel para o nosso servidor
app.set('view engine', 'ejs');

//acessando o modulo do banco de dados atras de um import do arquivo db.js aonde o vinculo foi criado
/*const db = require('./bancoDeDados/db')
const Localidade = require("./bancoDeDados/Localidade")*/

app.use(express.static('public'))

//traduz os dados enviados pelo formulario em uma estrutura java script
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//acessando o banco de dados
/*db
    .authenticate()
    .then(()=>{
        console.log("conexão efetuada")
    }).catch((msgErro)=>{
        console.log(msgErro);
    })*/
    var mysql = require('mysql');

    var database = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "88149460",
      database: "teste"
    });
    


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

app.post("/upload", (req, res) =>{
    var  nome= req.body.nome;
    var  longitude= req.body.longitude;
    var  latitude= req.body.latitude;
    var  origem= req.body.origem;
    var  andar= req.body.andar;
    var  tipo= req.body.tipo;
    var  setor= req.body.setor;
    var  portao= req.body.portao;
    database.connect(async function(err) {
        if (err)throw err;
        console.log("Connected!");
        var sql = "INSERT INTO localidades(Nome, longitude, latitude, Andar, Tipo, Setor,Portao) VALUES ?"
        var values  = [[nome, longitude, latitude, andar, tipo, setor,portao]]
        await database.query(sql, [values], function(err, result){
            if (err) throw err;
            console.log("Number of records inserted: " + result.affectedRows);
        })
    });  
})
app.listen(8080, () => {
    console,console.log(" servidor na porta 8080: http://localhost:8080");
});