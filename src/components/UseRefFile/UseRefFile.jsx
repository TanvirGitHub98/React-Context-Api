import { useRef } from "react";

const UseRefFile=()=>{
    const refName=useRef('')
    const refEmail=useRef('')
    const refPassword=useRef('')
    const handleForm=(e)=>{
        e.preventDefault();
        console.log(refName.current.value);
        console.log(refEmail.current.value);
        console.log(refPassword.current.value);

    }
    return(
        <div>
           <form onSubmit={handleForm}>
               <input ref={refName}  type="text" name="userName" id=""  placeholder="Enter Your Name"/><br/>
               <input ref={refEmail}type="email" name="email" id="" placeholder="Enter Email"/><br/>
               <input ref={refPassword} type="password" name="password" id="" placeholder="Enter Password"/><br/>
               <input type="submit" value="Submit" />
           </form>
        </div>
    )
}

export default UseRefFile;