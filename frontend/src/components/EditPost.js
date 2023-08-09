import React, { Fragment , useState} from 'react'

function EditPost({post}) {
  const [title, setTitle] = useState(post.title)

  const updateTitle = async(e) => {
    e.preventDefault()
    try {
      const body = { title }
      const response = await fetch(`https://makers-blog-service.onrender.com/posts/${post.posts_id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
      window.location = "/"
    } catch (error) {
      console.error(error.message)
    }

  }
  return (
    <Fragment>
      
<button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${post.posts_id}`}>
  Edit
</button>


<div class="modal" id={`id${post.posts_id}`} onClick={()=>setTitle(post.title)}>
  <div class="modal-dialog">
    <div class="modal-content">

  
      <div class="modal-header">
        <h4 class="modal-title">Edit title</h4>
        <button type="button" class="close" data-dismiss="modal" onClick={()=>setTitle(post.title)}>&times;</button>
      </div>

 
      <div class="modal-body">
       <input type='text' className='form-control' value = {title} onChange={e=>setTitle(e.target.value)}/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={e=>updateTitle(e)} >Edit</button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={()=>setTitle(post.title)}>Close</button>
      </div>

    </div>
  </div>
</div>
    </Fragment>
  )
}

export default EditPost