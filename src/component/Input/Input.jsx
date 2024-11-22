import { useEffect, useState } from "react";

function TodoForm({ addTodo }) {
    const [task, setTask] = useState("");
    const addTask = (evt) =>{
        evt.preventDefault();
        if(task.trim()){
            addTodo(task.trim())
            setTask('');
        };
    };
    return (

        <form className="flex" onSubmit={addTask}>
            <input
                type="text"
                placeholder="Create Task...."
                value={task}
                onChange={(e)=>{setTask(e.target.value)}}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button
                type="submit"
                className="rounded-r-lg px-3 py-1 bg-blue-600 text-white shrink-0"
            >
                Add Task
            </button>
        </form>
    );
};

export default TodoForm;

