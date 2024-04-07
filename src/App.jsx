
import { useEffect, useState } from "react";
import ToggleMode from "./components/ToggleMode";
import ProductsComponent from "./components/ProductsComponent";

function App() {

  const[darkMode,setDarkMode]=useState(false);



  return <div className={`${darkMode?'dark':''}`}>
    <ToggleMode darkMode={darkMode} setDarkMode={setDarkMode}/>
    <ProductsComponent />
   
  </div>
}

export default App
