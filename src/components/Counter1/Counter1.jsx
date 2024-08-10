import useCounter from "../../hooks/useCounter";

const Counter1=()=>{
    const [counter,IncreaseValue,DecreaseValue]=useCounter(20)
    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={IncreaseValue}>Increment</button>
            <button onClick={DecreaseValue}>Decrement</button>
        </div>
    )
}

export default Counter1;