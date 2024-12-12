import { useEffect, useState } from 'react'
import './App.css'
import Input from './component/Input/Input'
import TodoItems from './component/TodoItems/TodoItems'

function App() {
  const [todo, setTodo] = useState(() => {
    const savedTodos = localStorage.getItem("todo");
    // localStorage.clear()
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  
  useEffect(()=>{
    localStorage.setItem('todo', JSON.stringify(todo))
  }, [todo])

  const addTodo = (task) => {
    setTodo([task, ...todo]);
  };
  
  return (
    <>
      <h1 className='text-3xl tracking-tighter font-sans underline p-5'>Hi, user 👋</h1>
      <h1 className='text-3xl tracking-tighter underline font-sans p-5'>Manage your Todos</h1>
      <Input addTodo={addTodo} />
      <TodoItems todos={todo} />
    </>
  )
}

export default App
