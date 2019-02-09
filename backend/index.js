const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const base = require('./mods/base');

const app = express();
app.use(express.static(path.resolve(__dirname, '..', 'frontend')));
app.use(bodyparser.json());

//Ловим запрос на Характеристики
app.get('/chars', function(req, res){
    //Гетим Имеющиеся характеристики с базы данных
    base.getChars().then((result)=>{
        //Джейсоном кидаем результат на сайт
        res.json(result);
    });
});
//Ловим запрос на приставки к ЕИ
app.get('/consoles', function(req, res){
    //Гетим приставки с базы данных
    base.getConsoles().then((result)=>{
        //Джейсоном кидаем результат на сайт
        res.json(result);
    });
});


app.listen(80);