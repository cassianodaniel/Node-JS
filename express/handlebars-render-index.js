const express = require("express");
const app = express();
const handlebars = require('express-handlebars');

app.engine('handlebars', handlebars({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

app.get('/cad', function(req,res){
   res.render('formulario')
})

app.post('/add', function(req,res){
   res.send('Formulário Recebido!')
})

app.listen(8080, function(){
    console.log("Servidor: http://localhost:8080");
});
