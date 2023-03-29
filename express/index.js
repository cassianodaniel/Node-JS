const express = require("express");
const app = express();

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
});

app.get("/", function(req, res){
    res.send("Seja bem-vindo ao meu app");
});

app.get("/sobre", function(req, res){
    res.send("<h1>Minha pagina sobre</h1>");
});

app.get("/ola/:nome/:cargo", function(req, res){
    res.send("Ola " + req.params.nome + "." + "<br>" + "Seu cargo eh: "+ req.params.cargo);
});

app.use(express.static(__dirname + '/loginstyle.css'));

app.get("/sendfile", function(req,res){
    app.set('view engine', 'html');
    res.status(200).sendFile(__dirname + '/index.html');
});
