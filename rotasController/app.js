const express = require('express');
const app = express();
const rotasProdutos = require('./routes/rotasProdutos');

app.set('view engine', 'ejs');

app.use('/produtos', rotasProdutos);

app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000');
})