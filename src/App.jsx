
import { useCallback, useContext, useState } from 'react'
import Home from './components/Home/Home'
import { Context1Provider, NameContext } from './contexts/context1'
import './App.css'
import UseRefFile from './components/UseRefFile/UseRefFile';
import useCounter from './hooks/useCounter';
import Counter1 from './components/Counter1/Counter1';
import Counter2 from './components/Counter2/Counter2';
import UseMemoHook from './components/UseMemoHook/UseMemoHook';
import UseCallBack from './components/UseCallBack/UseCallBack';


function App() {
  const [increase, setIncrease]=useState(0)
  const [deccrease, setDecrease]=useState(50)
  const testFunForUseCallback=useCallback(()=>{
    console.log("I am call back")

  },[])

  return (
    <div>
         <UseCallBack testFunForUseCallback={testFunForUseCallback}/>
         <button onClick={()=> setIncrease(increase+1)}>Increase- {increase}</button>
         <button onClick={()=> setDecrease(deccrease-1)}>Decrease- {deccrease}</button>
    </div>
  )
}

export default App

