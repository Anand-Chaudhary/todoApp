import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './component/Input/Input'

function App() {
  const [todo, setTodo] = useState([]);

  return (
    <>
      <h1 className='text-3xl tracking-tighter font-sans underline p-5'>Hi, user 👋</h1>
      <h1 className='text-3xl tracking-tighter underline font-sans p-5'>Manage your Todos</h1>
      <Input />
    </>
  )
}

export default App
