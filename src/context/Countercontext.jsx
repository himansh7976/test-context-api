import React,{Children, createContext,useContext,useState} from "react";
const countercontext=createContext();

export const usecounter=()=>useContext(countercontext);

export const Counterprovider=({children})=>{
    const [count,setcount]=useState(0);


    const increment=()=>{
      setcount(count+1)
    }


    const decrement=()=>{
       setcount((pre)=>{
        if(pre==0){
            setcount(0);
        }
        return pre -1;
       });


    }
    const reset=()=>{
   setcount(0);
    }

    return(
        <countercontext.Provider value={{count,increment,decrement,reset}}>
               {children}
        </countercontext.Provider>
    )
}


