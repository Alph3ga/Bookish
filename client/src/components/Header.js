'use client'
import { useRouter } from "next/navigation";
import useAuthToken from "util/AuthToken";
import { useState, useEffect } from "react";

import '@/styles/index.css'
import '@/styles/HomePage.css'

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
    const handleClick2= (event)=>{
        event.preventDefault();

        router.push('/signup')
    };
    return (
        <div id="Header">
            <p>BOOKISH</p>
            <button className="nav_button log" onClick={handleClick}>
                {loggedIn? "Log out": "Log in"}
            </button>
            <button style={{display: loggedIn? 'none':'block'}} className="nav_button log" onClick={handleClick2}>
                Sign Up
            </button>
        </div>
    );
};