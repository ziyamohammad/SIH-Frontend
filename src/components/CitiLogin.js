import React, { useState } from 'react'
import styles from "../css/Citilogin.module.css"

function CitiLogin() {
     const[email,setEmail]=useState("")
      const[password,setPassword]=useState("")
  return (
    <div className={styles.citilogin}>
      <div className={styles.form}>
        <div className={styles.navbar}>
            <div className={styles.name}>
                  <div className={styles.logo}>
                     <img src="./logo.png" alt="/" height="100%" width="100%"/>
                    </div>
                   <span>Samudram</span> 
                  </div>
        </div>
        <span className={styles.hello}>Hello,</span>
        <span className={styles.hello}>Welcome Back</span>
        <span className={styles.instruction}>Please enter your detail to Login</span>
        <span className={styles.head}>Citizen Login</span>
        <form>
             <div className={styles.name1}>
                <label for ="email">Email</label>
                <input type="text" placeholder="Enter your Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className={styles.name1}>
                <label for ="password">Password</label>
                <input type="text" placeholder="Enter your Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <p className={styles.forgot}>Forgot Your Password ?</p>
             <button className={styles.but}>Login</button>
        </form>
        <div className={styles.login}>
            <span className={styles.log}>Don't have an account?</span>
            <span className={styles.log1}>Register Now</span>
        </div>
      </div>
       <div className={styles.image}>
            <div className={styles.childimage}>
            <img src="./citilogin.png" alt="/" height="100%" width="100%" />
            </div>
        </div>
    </div>
  )
}

export default CitiLogin
