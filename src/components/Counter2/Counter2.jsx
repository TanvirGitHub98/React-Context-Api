import useCounter from "../../hooks/useCounter";

const Counter2=()=>{
    const [counter,IncreaseValue,DecreaseValue]=useCounter(10)
    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={IncreaseValue}>Increment</button>
            <button onClick={DecreaseValue}>Decrement</button>
        </div>
    )
}

export default Counter2;