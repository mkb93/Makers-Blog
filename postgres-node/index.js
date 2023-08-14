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
    const {title, content} = req.body
    const newPost = await pool.query('INSERT INTO posts (title, content) VALUES($1, $2) RETURNING *',[title, content])
    res.json(newPost.rows[0]);
  } catch (error) {
    console.error(error.message)
  }
})

app.get("/posts", async (req, res) =>{
  try {
    const allPosts = await pool.query("SELECT * FROM posts")
    res.json(allPosts.rows)
  } catch (error) {
    console.error(error.message)
  }
})
app.get("/posts/:id", async (req, res) =>{
  try {
    const {id} = req.params
     const post = await pool.query("SELECT * FROM posts WHERE posts_id = $1",[id])
    res.json(post.rows[0])
  } catch (error) {
    console.error(error.message)
  }
})
app.put("/posts/:id", async (req, res) => {
  try {
    const {id} = req.params
    const {title} = req.body
    const updatePost = await pool.query("UPDATE posts SET title = $1 WHERE posts_id = $2",[title, id])
    res.json("Post was updated")
  } catch (error) {
    console.error(error.message)
  }
})
app.delete("/posts/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const deletePost =  await pool.query("DELETE FROM posts WHERE posts_id = $1", [id])
    res.json("Post was deleted")
  } catch (error) {
    console.error(error.message)
  }
})
let port = process.env.PORT || 4000
app.listen(port, ()=>{
  console.log('the server is running')
})