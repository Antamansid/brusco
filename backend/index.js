const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const base = require('./mods/base');

const app = express();
app.use(express.static(path.resolve(__dirname, '..', 'frontend')));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

//Ловим запрос на Характеристики
app.get('/chars', function(req, res){
    //Гетим Имеющиеся характеристики с базы данных
    base.getChars().then((result)=>{
        //Джейсоном кидаем результат на сайт
        res.json(result);
    });
});
//Лови запрос на добавление характеристики в базу
app.post('/chars', function(req, res){
    base.insertChar(req.body.magnitude, req.body.designation).then(()=>{
        let result = {
            magnitude: req.body.magnitude,
            designation: req.body.designation
        }
        res.json(result);
    })
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