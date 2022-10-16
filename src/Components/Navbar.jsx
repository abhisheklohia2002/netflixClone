import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import "./Nav.css";
import Search from './search/search';

import styled from 'styled-components';
const Navbar = () => {
    const [show, handleShow ] = useState(false);

useEffect(()=>{
window.addEventListener("scroll",()=>{
    if(window.scrollY > 100){
handleShow(true);
    } else handleShow(false);

});


// return ()=>{
    
//     window.removeEventListener("scroll")
// };

},[]);



  return (
    <>
    <div className={`nav ${show && "nav_black"}`}>
      <img className='nav_logo' src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png-900x511.png" alt="netflix logo" />
      <img className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="netflix avatar" />

<div className='nav-list'>
    <div>
        Home
    </div>
    <div>
        Tv Shows
    </div>
    <div>
        Movies
    </div>
    <div>
        New & Popular
    </div>
    <div>
        My Lists
    </div>
    <div>
        Browser by Language
    </div>
  
</div>

<div className='searchbar'>
    <Search/>
</div>

    </div>
 
    </>
  )
}

export default Navbar
