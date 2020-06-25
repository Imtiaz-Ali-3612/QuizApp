var mysql=require('mysql2')


var pool = mysql.createPool({
    host:"sql12.freemysqlhosting.net",
    user:"sql12350681",
    database:"sql12350681",
    password:"Kq9Aw5MKZs"
});

module.exports=pool.promise();