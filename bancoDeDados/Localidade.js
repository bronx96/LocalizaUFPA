const Sequelize = require("sequelize");
const connect = require("./db");

const Localidade = connect.define('localidade')



module.exports = Localidade;