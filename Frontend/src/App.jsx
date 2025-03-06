import { useState } from "react"
import AddTodo from "./Components/AddTodo"
import RenderTodo from "./Components/RenderTodo"

function App() {
  const [todos,setTodos]=useState([])
  return (
    <>
      <AddTodo todos={todos} setTodos={setTodos} />
      <RenderTodo todos={todos} setTodos={setTodos} />
    </>
  )
}

export default App
