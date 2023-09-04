const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes/router');

app.use(express.urlencoded({extended: true }))
app.use(express.json());
app.use('/',router);



const PORT = 8080;
app.listen(PORT,function(){
    console.log('Rodando...')
})