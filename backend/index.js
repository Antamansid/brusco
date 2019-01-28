const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const base = require('./mods/base');

const app = express();
app.use(express.static(path.resolve(__dirname, '..', 'frontend')));
app.use(bodyparser.json());

app.get('/chars', function(req, res){
    base.getChars().then((result)=>{
        res.json(result);
    });
});
app.get('/consoles', function(req, res){
    base.getConsoles().then((result)=>{
        res.json(result);
    });
});


app.listen(80);