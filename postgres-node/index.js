const express = require('express');
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.listen(4000, ()=>{
  console.log('the server is running on 4000')
})