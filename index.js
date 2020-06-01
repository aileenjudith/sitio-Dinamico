const express = require('express');
const app = express();
const hbs = require('hbs');

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/public'));


app.get('/inicio', (req,res)=>{
    res.render('index',{
        nombre : 'Aileen',
        year : new Date().getFullYear(),
        titulo : "inicio"
    });
});
app.get('/pintoruno', (req,res)=>{
    res.render('pintoruno',{
        nombre : 'Aileen',
        year : new Date().getFullYear(),
        titulo : "John William Waterhouse"
    });
});
app.get('/pintor2', (req,res)=>{
    res.render('pintor2',{
        nombre : 'Aileen',
        year : new Date().getFullYear(),
        titulo : "Pierre-Auguste Renoir"
    });
});
app.get('/pintor3', (req,res)=>{
    res.render('pintor3',{
        nombre : 'Aileen',
        year : new Date().getFullYear(),
        titulo : "Edgar Degas"
    });
});
app.get('/pintor4', (req,res)=>{
    res.render('pintor4',{
        nombre : 'Aileen',
        year : new Date().getFullYear(),
        titulo : "Vincent van Gogh"
    });
});

app.listen(3000,()=>{
    
    console.log('Escuchando en el puerto 3000');
});
