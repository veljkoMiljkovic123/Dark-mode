import { MdDarkMode } from "react-icons/md";
import { CiSun } from "react-icons/ci";

function ToggleMode({darkMode,setDarkMode}) {

    function handleMode(){
        setDarkMode(!darkMode)
    }


  return  <div className="flex justify-center my-3 cursor-pointer bg-slate-300 dark:bg-black/50" onClick={handleMode}>
    {darkMode?<CiSun size={42}/>:<MdDarkMode size={42}/>}
  </div>
  
}

export default ToggleMode