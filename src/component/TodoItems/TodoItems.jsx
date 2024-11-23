import React, { useState } from 'react'

const TodoItems = ({ todos }) => {
  const [color, setColor] = useState("white");

  return (
    <div className='p-5'>
      <ul className='flex flex-col'>
      {todos.map((task, index) => (
        <li key={index} className="py-1 felx justify-start text-black w-full m-5 p-5" style={{backgroundColor: color}} >
          <input type="checkbox" 
            onChange={()=>{setColor("#90EE90")}}
          />
          {task}
        </li>
      ))}
    </ul></div>
  )
}

export default TodoItems