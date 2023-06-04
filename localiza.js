const express = require('express');
const app = express();


const db = require('./models/db')

app. get("/", async (req, res) =>{
    res.send("ola mundo");
})
app.listen(8080, () => {
    console,console.log(" servidor na porta 8080: http://localhost:8080");
});