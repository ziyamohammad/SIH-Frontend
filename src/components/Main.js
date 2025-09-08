import React from 'react'
import styles from "../css/Main.module.css"
import { Link, useNavigate } from 'react-router'
import Navbar from './Navbar'

const Main = () => {
   const navigate=useNavigate();
  return (
    <>
    <div className={styles.main}>
      <Navbar/>
      <div className={styles.main1}>
      <div className={styles.authority}>
         <span className={styles.head}>
            For Authority
         </span>
         <span className={styles.content}>Stay informed with real-time hazard reports from citizens. With verified alerts and faster communication, authorities can coordinate responses effectively and ensure the safety of coastal communities.</span>
         <button className={styles.login} onClick={()=>{navigate("/authlogin")}}>Login</button>
         <button className={styles.report}>Report</button>
         <span className={styles.join}>Don't have an account?</span>
         <Link to ="/authsignup" className={styles.link}>Join as Authority</Link>
      </div>
       <div className={styles.divider}></div>
      <div className={styles.citizens}>
        <span className={styles.head1}>
            For Citizens
         </span>
         <span  className={styles.content}>Your eyes on the coast can make a real difference. By reporting hazards instantly and sharing vital information, you help protect lives and support safer shores for everyone.</span>
         <button className={styles.login} onClick={()=>{navigate("/citilogin")}}>Login</button>
         <button className={styles.report}>Report</button>
         <span className={styles.join}>Don't have an account?</span>
         <Link to ="/citisignup" className={styles.link}>Sign Up</Link>
      </div>
      </div>
    </div>
    <div className={styles.dashboard}>
      <h2>Disaster Dashboard</h2>
      <div className={styles.grid}>
      {[0,1,2,3,4,5].map((item)=>{
        return(
          <div className={styles.disasters}>
            <span className={styles.title}>🌊 Tsunami Alert</span>
            <span className={styles.source}>Chennai . INCOIS</span>
            <span className={styles.date}>5 Sep 2025</span>
          </div>
        )
      })}
      </div>
    </div>
    </>
  )
}

export default Main
