import { createContext, useState } from 'react'
import Home from './components/Home/Home'
//import './App.css'
export const ContextValue=createContext();

function App() {
  const [value,setValue]=useState(0)
  const toggleValue=()=>{
    setValue(value+1)
  }

  return (
    <div>
 
        <ContextValue.Provider value={value} >
              <Home/>
              <button onClick={toggleValue}>Value-{value}</button>
        </ContextValue.Provider>
   
 
    </div>
  )
}

export default App
