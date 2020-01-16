const express = require('express');
const fs = require('fs');
const path = require('path');
const {VerificaTokenImg} = require('../server/middlewares/autenticacion')

const app =  express();

app.get('/imagen/:tipo/:img',VerificaTokenImg,(req, res) =>{
    
    let tipo = req.params.tipo;
    let img = req.params.img;

    let pathImagen = path.resolve(__dirname, `../uploads/${tipo}/${img}`);
    
    if( fs.existsSync(pathImagen)){
        res.sendFile(pathImagen);
    }else{
        let noImagenPath = path.resolve(__dirname, '../assets/No-image-found.jpg');
        res.sendFile(path.resolve(noImagenPath))
    }

    
})

module.exports = app;