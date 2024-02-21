const mysql = require('mysql2')

const conection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'worklist'
})

conection.connect((err)=>{
    if(err){
        console.error('error connecting' ,err)
        return
    }
    console.log('connected to database')
})
module.exports = conection