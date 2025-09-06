import React, { useState } from 'react'
import styles from "../css/Navbar.module.css"
import useWindowWidth from './usewindowwidth'
import { Menu, X } from 'lucide-react';

function Navbar() {
  const width = useWindowWidth();
  const[isOpen,setIsopen]=useState(false);
  return (
    <div className={styles.navbar}>
        <div className={styles.name}>
      <div className={styles.logo}>
         <img src="./logo.png" alt="/" height="100%" width="100%"/>
        </div>
       <span>Samudram</span> 
      </div>
      {width>991?(<ul className={styles.navbaritems}>
        <li>Home</li>
        <li>About Us</li>
         <li>Disasters</li>
        <li>Contact Us</li>
      </ul>
      ):(
        <>
        <div className={styles.toggle} onClick={()=>{setIsopen(!isOpen)}}> {isOpen ? <X size="36px" color="white"/> : <Menu size="36px" color="white"/>}</div>
        {isOpen && (
            <ul className={styles.mobilemenu}>
              <li>Home</li>
        <li>About Us</li>
         <li>Disasters</li>
        <li>Contact Us</li>
            </ul>
          )}
        </>
      )}
      
    </div>
  )
}

export default Navbar
