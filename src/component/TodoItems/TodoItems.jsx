import React, { useState } from 'react'

const TodoItems = ({ todos }) => {
  const [index, setindex] = useState(0);
  const moveToEnd = (index) =>{
    setindex(index+1);
  }
  return (
    <div className='p-5'>
      <ul className='flex flex-col'>
      {todos.map((task, index) => (
        <li key={index} className="py-1 felx justify-start text-black w-full m-5 p-5 bg-white" >
          <input type="checkbox"
            onChange={()=>{moveToEnd}}
          />
          {task}
        </li>
      ))}
    </ul></div>
  )
}

export default TodoItems