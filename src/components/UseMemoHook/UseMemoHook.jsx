import { useMemo, useState } from "react";

const UseMemoHook=()=>{

    const [plus,setPlus]=useState(0)
    const [minus,setMinus]=useState(50)

    const checkingNumber=useMemo(()=>{
        console.log('........');
        return plus%2===0;

    },[plus])

    return(
        <div>
            <h4>Number is- {checkingNumber? 'Even':'Odd'}</h4>
            <button onClick={()=>setPlus(plus+1)}>Increase- {plus}</button><hr/>
            <button onClick={()=>setMinus(minus-1)}>Decrease- {minus}</button>
        </div>
    )
}

export default UseMemoHook;