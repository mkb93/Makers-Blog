const express = require('express');
const app = express()
const cors = require('cors')
const pool = require('./db')

app.use(cors())
app.use(express.json())

// ROUTES

// create a post
app.post("/posts", async (req, res) => {
  try {
    console.log(req.body)
  } catch (error) {
    console.error(error.message)
  }
})


app.listen(4000, ()=>{
  console.log('the server is running on 4000')
})