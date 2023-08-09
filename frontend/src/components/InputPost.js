import React, { Fragment, useState } from 'react'

function InputPost() {
  const [title, setTitle]= useState("")

  const updateTitle = (e) => {
   
  }
  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      const body = {title};
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
        <input type="text" className='form-control' value={title} onChange={e=> setTitle(e.target.value)} />
        <button className='btn btn-success'>Add</button>
      </form>
      <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id`}>
  Edit
</button> */}

<button type="button" class="btn btn-primary text-center mt-5" data-toggle="modal" data-target="#myModal">
  Create Post
</button>

<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

  
      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

   
      <div class="modal-body">
        Modal body..
      </div>

    
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>

  </Fragment>
  )
}

export default InputPost