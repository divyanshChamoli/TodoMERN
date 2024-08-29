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
  return (
    <>
      { todos.map((todo)=>{
        return(
          <ul key={todo?._id}>
            <div>{count++}</div>
            <li>{todo?.title}</li>
            <li>{todo?.description}</li>
          </ul>
        )
      }) }
    </>
  )
}

export default RenderTodo