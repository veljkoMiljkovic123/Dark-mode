
import { useEffect, useState } from "react";
import ToggleMode from "./components/ToggleMode";
import ProductsComponent from "./components/ProductsComponent";
import TodoItemComponent from "./components/TodoItemComponent";
import TodoOutputComponent from "./components/TodoOutputComponent";

function App() {


  const[allTodo,setAllTodo] = useState([])

  useEffect(()=>{
    console.log(allTodo);
  },[allTodo])


  return <div className="flex flex-col items-center justify-center my-[100px] bg-blue-600 p-10">
   {/* TODO INPUT */}
   <TodoItemComponent allTodo={allTodo} setAllTodo={setAllTodo}/>
   {/* TODO OUTPUT */}
   <TodoOutputComponent allTodo={allTodo} setAllTodo={setAllTodo}/>
  </div>
}

export default App
