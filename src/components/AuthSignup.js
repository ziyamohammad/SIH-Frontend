
import React, { useState } from 'react'
import styles from "../css/Authsignup.module.css"
import { Link } from 'react-router'

function AuthSignup() {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[location,setLocation]=useState("")
    const[gender,setGender]=useState("")
    const[agency,setAgency]=useState("")
    const[password,setPassword]=useState("")
    const[confirmpass,setConfirmpass]=useState("")
    const images=[
        {
            src:"./img1.png"
        },
        {
            src:"./img2.png"
        },

        {
            src:"./img3.png"
        },
        {
            src:"./img4.png"
        },
    ]


  return (
    <div className={styles.signup}>
      <div className={styles.image}>
        <div className={styles.slider}>
         {images.concat(images).map((item)=>{
            return(
                <div className={styles.images}>
                    <img src={item.src} alt="/" height="100%" width="100%"/>
                </div>
            )
         })}
         </div>
      </div>
      <div className={styles.form}>
        <h2>Register to contribute in Soceity</h2>
        <form>
            <div className={styles.name}>
                <label for ="name">Name</label>
                <input type="text" placeholder="Enter your Full Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div className={styles.name}>
                <label for ="email">Official Email</label>
                <input type="text" placeholder="Enter your Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className={styles.twofields}>
            <div className={styles.name1}>
                <label for ="agency"> Agency Name</label>
                <input type="text" placeholder="Enter Name" value={agency} onChange={(e)=>{setAgency(e.target.value)}}/>
            </div>
            <div className={styles.name1}>
                <label for ="gender">Gender</label>
                <input type="text" placeholder="Enter Gender" value={gender} onChange={(e)=>{setGender(e.target.value)}}/>
            </div>
            </div>
            <div className={styles.name}>
                <label for ="location">Office Location</label>
                <input type="text" placeholder="Enter your Location" value={location} onChange={(e)=>{setLocation(e.target.value)}}/>
            </div>
            <div className={styles.name}>
                <label for ="password">Password</label>
                <input type="text" placeholder="Enter your Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <div className={styles.name}>
                <label for ="confirm">Confirm Password</label>
                <input type="text" placeholder="Confirm Password" value={confirmpass} onChange={(e)=>{setConfirmpass(e.target.value)}}/>
            </div>
            <button className={styles.but}>Create Authority Account</button>
        </form>
        <div className={styles.login}>
        <span className={styles.log}>Already have an account?</span>
        <span className={styles.log1}>Login Here</span>
        </div>
      </div>
    </div>
  )
}

export default AuthSignup
