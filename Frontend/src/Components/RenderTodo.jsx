import React, { useEffect, useState } from 'react'

function RenderTodo() {
  let count=1
  const [todos,setTodos]=useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/viewTodos")
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      setTodos(data.todos)
    })
  },[])

  const removeTodo=(id)=>{
    fetch("http://localhost:3000/deleteTodo/"+id,{
      method: 'DELETE' ,
    })
    .then((res)=>{
      return res.json()
    })
  }

  const markAsComplete=(id)=>{
    fetch("http://localhost:3000/markAsComplete",{
      method: 'PUT' ,
      body: JSON.stringify({id}),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((res)=>{
      return res.json()
    })
  }

  return (
    <>
      { todos.map((todo)=>{
        return(
          <ul key={todo?._id}>
            <span>{count++}</span>
            {todo?.completed?<span>&nbsp; &#10004;</span>:<></>}
            <li>{todo?.title}</li>
            <li>{todo?.description}</li>
            <button onClick={()=> removeTodo(todo?._id)}>Delete</button>
            {!todo?.completed?<button onClick={()=> markAsComplete(todo?._id)} >Mark as complete</button>:<></>}
          </ul>
        )
      }) }
    </>
  )
}

export default RenderTodo