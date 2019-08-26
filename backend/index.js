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
    base.insertChar(req.body.magnitude, req.body.designation).then((baseRes)=>{
        //соответственно, если запрос обработался, делаем объект с результатами
        let result = {
            //Пихаем название характеристики из запроса
            magnitude: req.body.magnitude,
            //Объяснение характеристики = название
            designation: req.body.designation,
            //id из базы добавленной характеристики
            id: baseRes.insertId
        }
        //шлем на страничку
        res.json(result);
    })
});

//Лови запрос на вещи в базу
app.post('/items', function(req, res){
    base.insertItems(req.body.nameItem, req.body.beiItem, req.body.charsItem, req.body.compItem).then((baseRes)=>{
        //соответственно, если запрос обработался, делаем объект с результатами
        let result = {
            //Название
            nameItem: req.body.nameItem,
            //БУИ, к примеру - штуки
            beiItem: req.body.beiItem,
            //Характеристики
            charsItem: req.body.charsItem,
            //Из чего состоит (компоновка)
            compItem: req.body.compItem,
            //id из базы добавленной вещи
            id: baseRes.insertId
        }
        //шлем на страничку
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