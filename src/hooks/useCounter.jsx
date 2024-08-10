import { useState } from "react";

const useCounter=(initialValue=0)=>{
    const [counter,setCounter]=useState(initialValue);
    const IncreaseValue=()=>
    {
        setCounter(counter+1)

    }

    const DecreaseValue=()=>
        {
            setCounter(counter-1)
    
        }
    return [counter,IncreaseValue,DecreaseValue]
}

export default useCounter;