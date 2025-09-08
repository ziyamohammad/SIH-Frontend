import React, { useState } from 'react'
import styles from "../css/Authlogin.module.css"

function AuthLogin() {
    const[authid,setAuthid]=useState("")
  return (
    <div className={styles.authlogin}>
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
              <span className={styles.head}>Authority Login</span>
              <form>
                  <div className={styles.name1}>
                      <label for ="id">Authority Id</label>
                      <input type="text" placeholder="Enter your Unique Authority ID" value={authid} onChange={(e)=>{setAuthid(e.target.value)}}/>
                  </div>
                   <button className={styles.but}>Login</button>
              </form>
              <div className={styles.login}>
                  <span className={styles.log}>Don't have an account?</span>
                  <span className={styles.log1}>Register Now</span>
              </div>
            </div>
             <div className={styles.image}>
                  <div className={styles.childimage}>
                  <img src="./authlogin.png" alt="/" height="100%" width="100%" />
                  </div>
              </div>
    </div>
  )
}

export default AuthLogin
