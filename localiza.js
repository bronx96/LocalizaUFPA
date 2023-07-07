const express = require('express');
const app = express();
app.use(express.static('public'))

//selecionadno o motor de html para o express exibir, ele basicamente pega uma rquivo html e torna legivel para o nosso servidor
app.set('view engine', 'ejs');

//conexão com as paginas ejs
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

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

//pagina de informações do local
app. get("/local/:id/", async (req, res) =>{
    var id = req.params.id;//pega o identificador da barra de endereço
    dados = await db.selectId('localidade',id)//retorna a linha do identificador
    const Andar = await db.selectId('andar', dados.Andar);
    const Tipo = await db.selectId('tipo', dados.Tipo);
    const Setor = await db.selectId('setor', dados.Setor);
    const Portao = await db.selectId('portao', dados.Portao);
    console.log(dados)//checagem de dados
    res.render("Local", {//renderização da pagina
        //campos selecionados
        nome: dados.Nome, 
        origem: dados.Origem,
        andar: Andar.Nome,
        tipo: Tipo.Nome,
        setor: Setor.Nome,
        portao: Portao.Nome
    });
})


//pagina de cdastro de local
app.post("/upload", async (req, res) =>{
    //informações das caixas de resposta
    var  nome= req.body.nome;
    var  longitude= req.body.longitude;
    var  latitude= req.body.latitude;
    var  origem= req.body.origem;
    var  andar= req.body.andar;
    var  tipo= req.body.tipo;
    var  setor= req.body.setor;
    var  portao= req.body.portao;
    //inserção das informações
        await db.insertLocais(nome, longitude, latitude, andar, tipo, setor, portao);
    res.render("LocalRegistro")
})
app.listen(8080, () => {
    console,console.log(" servidor na porta 8080: http://localhost:8080");
});