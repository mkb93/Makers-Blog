import React, { Fragment, useEffect, useState } from 'react'

function ListPosts() {
  
  const [posts, setPosts]= useState([])
  const deletePost = () => {
    
  }
  const getPosts = async () => {
    try {
      const response = await fetch("http://localhost:4000/posts")
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
        <td>Edit</td>
        <td><button className='btn btn-danger' onClick={()=>deletePost(post.posts_id)}></button></td>
      </tr>
      ))}
    </tbody>
  </table>
  </Fragment>
  )
}

export default ListPosts