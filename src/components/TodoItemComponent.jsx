import React, { useState } from 'react'

function TodoItemComponent({allTodo,setAllTodo}) {
    const[currentState,setCurrentState] = useState('');

    function handleInput(e){
        setCurrentState(e.target.value);
    }
    function handleTodo(){
        if(currentState){
            setAllTodo([...allTodo,{title:currentState,id:new Date().getTime()},
            ]);
            setCurrentState('');
        }
    }
  return (
    <div>
        <input type="text" placeholder='Insert TODO' onChange={handleInput} value={currentState}/>
        <button onClick={handleTodo} className='bg-white text-black'>Add TODO</button>
    </div>
  )
}

export default TodoItemComponent