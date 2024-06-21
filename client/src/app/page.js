'use client'

import '@/styles/HomePage.css';
import '@/styles/index.css';
import default_book_cover from '@/public/cover_template.jpg'
import {useEffect, useState} from 'react';
import axios from 'axios';


export default function Page() {
  const [loggedIn, setLoggedIn]= useState(false);
  var changing= false;
  const [book, setBook]= useState({
    title: "Loading books",
    description: "loading...",
    imageLink: "",
  });
  const handleBookChange= (event)=>{
    if(changing){ return; }
    changing= true;
    var randomBook= axios.get((process.env.SERVER || "http://localhost")+":8080/random");
    randomBook.then((info)=>{setBook(info.data); changing= false;});
  }
  useEffect(()=>{
    if(localStorage.getItem('loggedIn')==null){
      setLoggedIn(false);
    }
    else{
      setLoggedIn(true);
    }
    var randomBook= axios.get((process.env.SERVER || "http://localhost")+":8080/random");
    randomBook.then((info)=>setBook(info.data));
  },[]);

  return (
    <div className="HomePage">
      <p id="heading_name" className="head_font">Bookish</p>
        <div id="nav_div">
            {/* <button type="button" className="nav_button" style={{float: "left"}}>Genres</button>
            <button type="button" className="nav_button" style={{float: "left"}}>Random</button> */}
            <button type="button" className="nav_button" style={{float: "right"}}>{loggedIn? "Profile" : "Log in"}</button>
        </div>
        <form action="/search" method="get">
            <input id="search_bar" className="body_font" name="search_text" type="text" placeholder="Enter a Book name..."/>
            <button className="nav_button">Search</button>
        </form>

        <div id="catalogue_div" className="body_font">
            <div style={{alignItems: "center", display: "flex", flexDirection: "row", justifyContent: "center"}}>
            <button id="nav_left" onClick={handleBookChange} style={{float: "left", cursor: "pointer"}}></button>
            <img id="book_thumbnail" style={{margin: "4vw"}} src={book.image} alt="book cover"/>
            <button id="nav_right" onClick={handleBookChange} style={{float: "right", cursor: "pointer"}}></button>
            </div>
            <div id="book_info">
                <p id="book_name" className="head_font">{book.title}</p>
                <p id="book_description">{book.description}</p>
                
            </div>
        </div>

        <div id="footer" style={{height: "10vh"}}></div>
    </div>
  );
}