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
            //Создаем новый пул
            this.pool.getConnection((err, connection)=>{
                if(err) throw err;
                //Селектим все Характеристики
                connection.query('Select * from chars', (error, results, fields)=>{
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
    insertChar(magnitude, designation){
        return new Promise((resolve, reject)=>{
            this.pool.getConnection((err, connection)=>{
                if(err) throw err;
                connection.query(`INSERT INTO chars (magnitude, name, designation) VALUES ('${magnitude}', '${magnitude}', '${designation}')`, (error, results, fields)=>{
                    connection.release();
                    if(error) throw error;
                    resolve(results);
                })
            })
        })
    }/*
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