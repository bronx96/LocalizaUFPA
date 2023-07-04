async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise")
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '88149460',
        database: 'teste'
      })
    console.log("conectou")
    global.connection = connection;
    return connection;

}

async function selectLocais(){
    const con = await connect();
    const [rows] = await con.query('SELECT * FROM localidades;')
    return await rows;
}
async function insertLocais(Nome, longitude, latitude, andar, origem, tipo, setor, portao){
    const con = await connect();
    const sql = 'INSERT INTO Localidades(Nome, longitude, latitude, Andar, Origem, Tipo, Setor, Portao) VALUES(?, ?, ?, ?, ?, ?, ?, ?)'
    const values = [Nome, longitude, latitude, andar, origem, tipo, setor, portao]
    await con.query(sql, values)
}

module.exports={selectLocais, insertLocais}