
import { useContext } from 'react'
import Home from './components/Home/Home'
import { Context1Provider, NameContext } from './contexts/context1'
import './App.css'
import UseRefFile from './components/UseRefFile/UseRefFile';
import useCounter from './hooks/useCounter';
import Counter1 from './components/Counter1/Counter1';
import Counter2 from './components/Counter2/Counter2';
import UseMemoHook from './components/UseMemoHook/UseMemoHook';


function App() {

  return (
    <div>
         <UseMemoHook/>
    </div>
  )
}

export default App

