const mysql = require("mysql");

class DB {
    constructor(){
        this.pool = mysql.createPool({
            connectionLimit : 10,
            host     : 'localhost',
            user     : 'root',
            password : 'gfif1991',
            database : 'brusco'
        });
    }
    getChars(){
        return new Promise((resolve, reject)=>{
            //Создаем пустой массив
            let data = [];
            //Гетим СИ характеристики
            this.getCharsSi().then((siResult)=>{
                //Гетим неСИ Характеристики
                this.getCharsNoSi().then((noSiResult)=>{
                    //Конкатим в пустой массив полученные результаты
                    data = siResult.concat(noSiResult);
                    //Ресолвим массив
                    resolve(data);
                })
            })
        })
    }
    getCharsSi(){
        return new Promise((resolve, reject)=>{
            //Создаем новый пул
            this.pool.getConnection((err, connection)=>{
                if(err) throw err;
                //Селектим все СИ Характеристики
                connection.query('Select * from si', (error, results, fields)=>{
                    connection.release();
                    if(error) throw error;
                    //Ресолвим результат
                    resolve(results);
                })
            })
        })
    }
    getCharsNoSi(){
        return new Promise((resolve, reject)=>{
            //Создаем новый пул
            this.pool.getConnection((err, connection)=>{
                if(err) throw err;
                //Селектим все неСИ Характеристики
                connection.query('Select * from nosi', (error, results, fields)=>{
                    connection.release();
                    if(error) throw error;
                    //Ресолвим результат
                    resolve(results);
                })
            })
        })
    }
    getConsoles(){
        return new Promise((resolve, reject)=>{
            //Создаем новый пул
            this.pool.getConnection((err, connection)=>{
                if(err) throw err;
                //Селектим все Приставки
                connection.query('Select * from consolessi', (error, results, fields)=>{
                    connection.release();
                    if(error) throw error;
                    //Ресолвим результат
                    resolve(results);
                })
            })
        })
    }
    /*insert(data){
        return new Promise((resolve, reject)=>{
            this.pool.getConnection((err, connection)=>{
                if(err) throw err;
                connection.query('INSERT INTO `todolist` (`post`) VALUES(?)', data, (error, results, fields)=>{
                    connection.release();
                    if(error) throw error;
                    resolve(results);
                })
            })
        })
    }
    update(data){
        return new Promise((resolve, reject)=>{
            this.pool.getConnection((err, connection)=>{
                if(err) throw err;
                connection.query('UPDATE `todolist` SET `post`=? WHERE id=?', [data.text, data.idPost], (error, results, fields)=>{
                    connection.release();
                    if(error) throw error;
                    resolve(results);
                })
            })
        })
    }
    delete(data){
        return new Promise((resolve, reject)=>{
            this.pool.getConnection((err, connection)=>{
                if(err) throw err;
                connection.query('DELETE FROM `todolist` WHERE id=?', data, (error, results, fields)=>{
                    connection.release();
                    if(error) throw error;
                    resolve(results);
                })
            })
        })
    }*/
}
module.exports = new DB;