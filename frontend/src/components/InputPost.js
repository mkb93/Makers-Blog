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
    
      {/* <h1 className='text-center mt-5'>InputPost</h1>
      <form className='d-flex mt-5' onSubmit={onSubmitForm}>
        <input type="text" className='form-control' value={title} onChange={e=> setTitle(e.target.value)} placeholder="Title" />
        <input type="text" className='form-control' value={content} onChange={e=> setContent(e.target.value)} placeholder="Content" />
        <button className='btn btn-success'>Add</button>
      </form> */}
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#idCreate`}>
  Create
</button>
<div class="modal" id='idCreate'>
<div class="modal-dialog">
<div class="modal-content">
  <div class="modal-header">
        <h4 class="modal-title">Write a Post</h4>
        <button type="button" class="close" data-dismiss="modal" >&times;</button>
      </div>
      <form className='d-flex mt-5' onSubmit={onSubmitForm}>
        <input type="text" className='form-control' value={title} onChange={e=> setTitle(e.target.value)} placeholder="Title" />
        <input type="text" className='form-control' value={content} onChange={e=> setContent(e.target.value)} placeholder="Content" />
        <button className='btn btn-success'>Add</button>
      </form> 
      
</div>
</div>
</div>
  </Fragment>
  )
}

export default InputPost