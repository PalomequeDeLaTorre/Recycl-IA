var ruta=require("express").Router();

ruta.get('/', (req, res) => {
    res.render('usuarios/inicio');
});

ruta.get("/login",async(req,res)=>{
    res.render("usuarios/login");
});

ruta.post("/login",async(req,res)=>{
    var user = req.body;
    if (user.user == req.body.user && user.password == req.body.password) {
        res.render("usuarios/perfil");
    }

});

ruta.get("/register",(req,res)=>{
    res.render("usuarios/registro"); 
});

ruta.post("/register",(req,res)=>{
    var user = req.body;
    res.redirect("/login");
});

ruta.get("/politicasyprivacidad",async(req,res)=>{
    res.render("usuarios/politicasyprivacidad");
});
ruta.get("/miPremio",(req,res)=>{
    res.render("usuarios/premios");
});

module.exports=ruta;


