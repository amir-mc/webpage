import React, { useState } from "react";


const Active=()=>{
  const [dark ,setdark]=useState<boolean>(false);
  const handleDark=()=>{
    setdark(true)
  }
    return(
        <button type="button"  onClick={()=>handleDark}>
            <span className={`${dark? 'bg-red-900':'bg-blue-600'}`}>
                salom 
                </span>
        </button>
    )
}
export default Active