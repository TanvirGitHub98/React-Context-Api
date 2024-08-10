import { useContext } from "react";
import { ContextValue } from "../../App";

const LastHome=()=>{
    const getValue=useContext(ContextValue)
    return(
        <div>
           
           <div>
                  <button >Last Value-{getValue}</button>
            </div>
        </div>
    )
}

export default LastHome;