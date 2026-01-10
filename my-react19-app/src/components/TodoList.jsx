import { useState } from "react"

export const TodoList = () => {

  const [todos, setTodos] = useState([{id: 1, task: "Learn React", done: false }, {id: 2, task: "Learn Node", done: false}, {id: 3, task: "Learn Ruby", done: false}])

  const addTask = () => {
    const newItem = {id: Date.now(), task: "Learn Java", done: false}
    setTodos([...todos, newItem]);
  }

  const deleteTask = (id) => {
    return setTodos(todos.filter((item) => item.id !== id ))
  }

  const toggleTask = (id) => {
    setTodos(todos.map((item) =>
      {
        if(item.id === id){
          return {...item, done: !item.done}
        }
        return item;
      }
    ))
  } 

  return(
    <div>
      <h1>ToDoList</h1>
      <ol>
        {
          todos.map((todo) => {
            return(
              <li key={todo.id}>
                <span style={{textDecoration: todo.done ? "line-through" : "none"}}>
                  {todo.task} 
                </span>
                <button onClick={() => toggleTask(todo.id)}>{todo.done ? "Undo" : "Done"}</button>
                <button onClick={() => deleteTask(todo.id)}>Delete Task</button>
              </li>
            )
          })
        }
      </ol>
      <button onClick={addTask}>Add Task</button>
    </div>
  )
}
