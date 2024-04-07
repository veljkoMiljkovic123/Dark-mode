import React from 'react';

function TodoOutputComponent({ allTodo, setAllTodo }) {

    function handleRemove(id){
        let removeTodo = allTodo.filter((todo) => todo.id !== id);
        setAllTodo(removeTodo);
        console.log(removeTodo);
    }

    return (
        <div className='my-10 flex flex-col text-center gap-[20px]'>
            {allTodo.length > 0 ? allTodo.map((item, index) => {
                return (
                    <div key={index} className='flex items-center gap-2'>
                        <h2 className='p-2 bg-red-400'>{item.title}</h2>
                        <button onClick={() => handleRemove(item.id)} className='bg-white p-2 text-black'>Remove</button>
                    </div>
                );
            }) : <h2>Nemas TODO za danas!!</h2>}
        </div>
    );
}

export default TodoOutputComponent;
