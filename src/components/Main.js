import React from 'react'
import styles from "../css/Main.module.css"
import { Link } from 'react-router'

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.authority}>
         <span className={styles.head}>
            For Authority
         </span>
         <span className={styles.content}>Monitor hazards faster, verify citizen alerts, and respond with confidence.</span>
         <button className={styles.login}>Login</button>
         <button className={styles.report}>Report</button>
         <span className={styles.join}>Don't have an account?</span>
         <Link to ="/authsignup" className={styles.link}>Join as Authority</Link>
      </div>
       <div className={styles.divider}></div>
      <div className={styles.citizens}>
        <span className={styles.head1}>
            For Citizens
         </span>
         <span  className={styles.content}>Your eyes on the coast can protect thousands — share, receive, and act together.</span>
         <button className={styles.login}>Login</button>
         <button className={styles.report}>Report</button>
         <span className={styles.join}>Don't have an account?</span>
         <Link to ="/citisignup" className={styles.link}>Sign Up</Link>
      </div>
    </div>
  )
}

export default Main
