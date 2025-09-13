import React, { useState } from 'react'
import styles from "../css/Main.module.css"
import { Link, useNavigate } from 'react-router'
import Navbar from './Navbar'
import { SquareX } from 'lucide-react'
import axios from 'axios'
import { toast } from 'react-toastify'

const Main = () => {
   const navigate=useNavigate();
    const [loading, setLoading] = useState(false)
   const[response,setResponse]=useState()
   const[model,setModel]=useState(false)
   const[message,setmessage]=useState("")
   const[image,setImage]=useState()
   const handleremove = () =>{
   setModel(false)
}

const handlesubmit = async(e)=> {
   e.preventDefault()
   setLoading(true)
    const formData = new FormData();
    formData.append("message", message);
    formData.append("reportImage", image); // backend must accept multipart/form-data
   try {
    const response = await axios.post("https://sih-backend-dsdf.onrender.com/api/v1/user/gemini/api",formData,{withCredentials:true})
    console.log(response.data)
  const responsemessage = response.data
  setResponse(responsemessage)
 
   } catch (error) {
    console.log(error)
   }finally{
    setLoading(false)
   }
}
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
         <button className={styles.report} onClick={()=>{setModel(true)}}>Report</button>
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

    {model && (
      <div className={styles.modal}>
        <div className={styles.innermodal}>
          <span className={styles.cancel1} onClick={handleremove}><SquareX/></span>
          <span className={styles.modelhead}>Report the Hazard</span>
          <form onSubmit={handlesubmit} className={styles.reportform}>
            <input type="file" className={styles.modalinput}  placeholder='Upload your image'  onChange={(e) => setImage(e.target.files[0])}/>
            <input type="text" className={styles.modalinput} value={message} placeholder='Comments'  onChange={(e) => setmessage(e.target.value)}/>
            <button type="submit" className={styles.modalsubmit} disabled={loading}>{loading ?"Generating Response...":"Submit Report"}</button>
          </form>
          <h4 className ={styles.head4}>Response Generated</h4>
        {response && (<span className = {styles.res}>{response.data || response.message}</span>)}
        </div>

      </div>
  )}
  
  
    </>
  )
}

export default Main
