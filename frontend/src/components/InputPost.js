import React, { Fragment, useState } from 'react'

function InputPost() {
  const [title, setTitle]= useState("")
  const [content, setContent]= useState("")

  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      const body = {title, content};
      const response = await fetch("https://makers-blog-service.onrender.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
      window.location = "/"
    } catch (error) {
      console.error(error.message)
    }
  }

  return ( <Fragment>
    
      <h1 className='text-center mt-5'>InputPost</h1>
      <form className='d-flex mt-5' onSubmit={onSubmitForm}>
        <input type="text" className='form-control' value={title} onChange={e=> setTitle(e.target.value)} placeholder="Title" />
        <input type="text" className='form-control' value={content} onChange={e=> setContent(e.target.value)} placeholder="Content" />
        <button className='btn btn-success'>Add</button>
      </form>
  </Fragment>
  )
}

export default InputPost