import { useContext } from "react";
import { NameContext } from "../../contexts/context1";


const LastHome=()=>{
    const [name,setName]=useContext(NameContext)
    return(
        <div>
           
           <div>
                  <button >Last Value-{name}</button>
            </div>
        </div>
    )
}

export default LastHome;