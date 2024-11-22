import React, { useState } from 'react'

const TodoItems = ({ todos }) => {
  // const [checked, setChecked] = useState(false)
  // const bgChange = () =>{
  //   const input  = document.querySelector('input');
  //   input.addEventListener('click', ()=>{
  //     setChecked(true)
  //     input.classList.remove('bg-white');
  //     console.log("HI");
  //   })
  // }
  return (
    <div className='p-5'>
      <ul className='flex flex-col'>
      {todos.map((task, index) => (
        <li key={index} className="py-1 felx justify-start text-black bg-white w-full m-5 p-5 ">
          <input type="checkbox" 
          // checked = {false}
          // onChange={bgChange}
          // setChecked = {true}
          />
          {task}
        </li>
      ))}
    </ul></div>
  )
}

export default TodoItems