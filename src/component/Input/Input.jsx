function TodoForm() {
    

    return (
        <form  className="flex">
            <input
                type="text"
                placeholder="Create Task...."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-blue-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

