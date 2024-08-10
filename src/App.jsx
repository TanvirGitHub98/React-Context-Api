
import { useContext } from 'react'
import Home from './components/Home/Home'
import { Context1Provider, NameContext } from './contexts/context1'
//import './App.css'


function App() {

  //const [name,setName]=useContext(NameContext);
  return (
    <div>
           <Context1Provider>  
                <Home/>

           </Context1Provider>
    </div>
  )
}

export default App
