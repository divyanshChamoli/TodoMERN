import React, { useState } from 'react'

function AddTodo() {
    const sendToServer=()=>{
        console.log("Sent")
        
        fetch("http://localhost:3000/addTodo", {
            method: 'POST' ,
            body: JSON.stringify({
                title,
                description,
                completed:false
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
        })
    }
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
  return (
    <>  
        <input type="text" placeholder="Enter title" value={title} onChange={(e)=>setTitle(e.target.value)} /> <br/>
        <input type="text" placeholder="Enter description" value={description} onChange={((e)=>setDescription(e.target.value))} /> <br/>
        <button onClick={sendToServer}>Add Todo</button>
    </>
  )
}

export default AddTodo