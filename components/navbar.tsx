
import { auth, signIn, signOut } from "@/auth";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import React from "react";
const Navabr=async()=>{
    const sesstion =await auth()
    return(
        <>
        <header className="px-4 py-4 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between  items-center">
                <Link href='/'>
                <img  src='/logo.jpg' width={80} height={120} />
                </Link>
                <div className="flex justify-center gap-5 text-black ">
                { 
                    sesstion && sesstion?.user ?(
                        
                    <>
                    <Link href='/startup/create'>
                        <span>
                            create
                        </span>
                    </Link>
                    <form action={async()=>{
                        "use server"
                        await signOut({redirectTo:("/")})
                    }}>

                    <button type="submit">
                                log out
                            </button>
                    </form>
                    <Link href={`/users/${sesstion?.id}]`}>
                    <span>
                        {sesstion?.user?.name}
                    </span>
                    </Link>
                        </>
                    ):(
                        <form action={async()=>{
                        "use server";
                            await signIn('github')}}>
                      
                            <button type="submit">
                                log in
                            </button>
                        </form>
                        
                    )
                }
                </div>
            </nav>
        </header>
        </>
    )
}
export default Navabr