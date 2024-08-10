import { createContext, useState } from "react";

export const NameContext=createContext();
export const Context1Provider=({children})=>{
    const [name,setName]=useState('Hello Sumona')
    return(
        <div>
            <NameContext.Provider value={[name,setName]}>
                  {children}
            </NameContext.Provider>

        </div>
    )
}
