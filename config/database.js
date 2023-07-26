const {Sequelize} = require ('sequelize')

const DB_NAME = 'Api-project';
const DB_USER = 'root';
const DB_PASSWORD = '';
const DB_HOST = 'localhost';

const sequelize = new Sequelize (DB_NAME, DB_USER, DB_PASSWORD,{
    host : DB_HOST,
    dialect : 'mysql',
});
 
module.exports = sequelize;




// const mysql = require ('mysql2');
 
// const connection = mysql.createConnection({
//     connectionLimit: 10,
//      password:"xyz",
//     host: 'localhost',
//     user: 'xyz',
//     database: 'Api-project',
// });

// connection.connect((err)=>{
//     if (err){
//         console.error('Error connecting to database:',err);
//         return;
        
//     }
//     console.log('Connected to the database');
// });
// module.exports=connection;