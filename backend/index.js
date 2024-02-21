const express = require('express')
const cors = require('cors')
const port =4000
const db = require('./config')
const app = express()
app.use(cors())



app.get('/work', (req, res) => {
const sql = "SELECT * FROM doing"
db.query(sql,(err,result)=>{
 if(err){
  console.log('error query', err)
  res.status(500).send("internal server error")
  return
 }
 if(result && result.length){
  const doingList = result.map(data=>data.kegiatan)
  res.send(doingList)
 }else{
  res.send('no data found')
 }
})

  })
app.listen(port,()=>{
    console.log('server running on port ',port)
})

