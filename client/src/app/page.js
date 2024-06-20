'use client'

import '@/styles/HomePage.css';
import '@/styles/index.css';
import default_book_cover from '@/public/cover_template.jpg'
import {useEffect, useState} from 'react';


export default function Page() {
  const [loggedIn, setLoggedIn]= useState(false);
  useEffect(()=>{
    if(localStorage.getItem('loggedIn')==null){
      setLoggedIn(false);
    }
    else{
      setLoggedIn(true);
    }
  })

  return (
    <div className="HomePage">
      <p id="heading_name" className="head_font">Bookish</p>
        <div id="nav_div">
            <button type="button" className="nav_button" style={{float: "left"}}>Genres</button>
            <button type="button" className="nav_button" style={{float: "left"}}>Random</button>
            <button type="button" className="nav_button" style={{float: "right"}}>{loggedIn? "Profile" : "Log in"}</button>
        </div>
        <form action="/search" method="get">
            <input id="search_bar" className="body_font" name="search_text" type="text" placeholder="Enter a Book name..."/>
            <button className="nav_button">Search</button>
        </form>

        <div id="catalogue_div" className="body_font">
            <div style={{alignItems: "center", display: "flex", flexDirection: "row", justifyContent: "center"}}>
            <button id="nav_left" style={{float: "left"}}></button>
            <img id="book_thumbnail" style={{margin: "4vw"}} src={default_book_cover} alt="book cover"/>
            <button id="nav_right" style={{float: "right"}}></button>
            </div>
            <div id="book_info">
                <p id="book_name" className="head_font">PLACEHOLDER</p>
                <p id="book_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vestibulum pharetra rutrum ligula a pharetra. Nulla sagittis eros elit, in faucibus ipsum maximus in. 
                    Pellentesque luctus elementum odio, eu dignissim eros placerat ut. Duis ac porta tellus. 
                    Curabitur porttitor tristique justo, et aliquet velit tincidunt nec. Morbi sed mi lectus.</p>
                
            </div>
        </div>

        <div id="footer" style={{height: "10vh"}}></div>
    </div>
  );
}