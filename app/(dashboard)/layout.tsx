import React from "react"

const Layout=({children}:{children:React.ReactNode})=>{
    return(
        <>
        <div>
        <h1>dash</h1>
        {children}
        </div>
        </>
        
    )
}
export default Layout