'use client'
import { useRouter } from "next/navigation";
import useAuthToken from "util/AuthToken";
import { useState, useEffect } from "react";

export default function Header(){
    const [loggedIn, setLoggedIn]= useState(false);
    const { removeToken }= useAuthToken();
    const router= useRouter();
    useEffect(()=>{
    if(localStorage.getItem('loggedIn')==null){
        setLoggedIn(false);
    }
    else{
        setLoggedIn(true);
    }
    });
    const handleClick= (event)=>{
        event.preventDefault();

        if(loggedIn){
            removeToken();
            router.refresh();
        }
        else{
            router.push('/login');
        }
    };
    return (
        <div id="Header">
            <p>BOOKISH</p>
            <button id="log" className="nav_button" onClick={handleClick}>
                {loggedIn? "Log out": "Log in"}
            </button>
        </div>
    );
};