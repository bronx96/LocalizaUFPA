const { Sequelize } = require("sequelize")

const myconect = new Sequelize("localizaufpa", "root", "88149460",{
    host: "localhost",
    dialect: 'mysql'
})

myconect.authenticate().then(
    function(){
        console.log("BOA CONEXÃO");
    }
).catch(
    function(){
        console.log("ERRO DE CONEXÃO");
    }
)

module.exports = myconect;