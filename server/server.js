const config = require('../config/config')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.get('/usuario', function (req, res) {
  res.json('get usuario')
});
 
app.post('/usuario', function (req, res) {

    let body = req.body
    
    if( body.nombre === undefined ){
        
        let body = req.body;

        res.status(400).json({
            ok: false,
            mensaje: "el nombre es nesesario",
            //err: errors
        });

    }else{
        res.json(body);
    }

});

app.put('/usuario/:id', function (req, res) {
    let id = req.params.id
    res.json({
        id
    });
});

app.delete('/usuario', function (req, res) {
    res.json('delete usuario')
});
  
app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto: ', 3000);
});