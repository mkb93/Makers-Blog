import React, { Fragment, useEffect, useState } from 'react'
import EditPost from './EditPost'
function ListPosts() {
  
  const [posts, setPosts]= useState([])
  const deletePost = async (id) => {
      try {
        const deletePost = await fetch(`https://makers-blog-service.onrender.com/posts/${id}`, {
          method: "DELETE"
        })
        setPosts(posts.filter(post=>post.posts_id !== id))
        console.log(deletePost)
      } catch (error) {
        console.error(error.message)
      }
  }
  const getPosts = async () => {
    try {
      const response = await fetch("https://makers-blog-service.onrender.com/posts")
      const data = await response.json()
      setPosts(data)
    } catch (error) {
      console.error(error.message)
    }
  }
  useEffect(()=> {
    getPosts();
  }, [])
  return (<Fragment>
    <table class="table mt-5 text-ce">
    <thead>
      <tr>
        <th>Title</th>
        <th>Content</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr> */}
      {posts.map((post)=>(
        <tr key={post.posts_id}>
        <td>{post.title}</td>
        <td>{post.content}</td>
        <td><EditPost post ={post}/></td>
        <td><button className='btn btn-danger' onClick={()=>deletePost(post.posts_id)}>Delete</button></td>
      </tr>
      ))}
    </tbody>
  </table>
  </Fragment>
  )
}

export default ListPosts