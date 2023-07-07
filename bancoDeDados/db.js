async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise")
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '88149460',
        database: 'localizaufpa'
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
async function insertLocais(Nome, longitude, latitude, andar, tipo, setor, portao){
    const con = await connect();
    const sql = 'INSERT INTO Localidade(Nome, longitude, latitude, Andar, Tipo, Setor, Portao) VALUES(?, ?, ?, ?, ?, ?, ?)'
    const values = [Nome, longitude, latitude, andar, tipo, setor, portao]
    await con.query(sql, values)
}
async function selectId(tabela, valor){
    const con = await connect();
    const sql = 'Select  * FROM ' + tabela + ' where Id = ?;';
    const values = [valor]
    const [rows] = await con.query(sql, values);
    return await rows[0]
}

module.exports={selectLocais, insertLocais, selectId}