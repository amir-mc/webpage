import React from "react"
import Navabr from "../../components/navbar"


const Layout=({children}:Readonly<{children:React.ReactNode}>)=>{
return(
    <main className="font-work-sans">
        <Navabr/>
        {children}
    </main>
)
}
export default Layout