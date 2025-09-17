import React, { useState } from 'react'
import styles from "../css/Main.module.css"
import style from "../css/About.module.css"
import styl from "../css/Contact.module.css"
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
    <div className={style.container} >
          <div className={style.heading}>About Us</div>
          <div className={style.boxes}>
            <div className={style.left}>
              <div className={style.head}>About Samudram</div>
              <p className={style.para}>Harnessing the power of citizens, AI, and ocean intelligence to build safer coastlines.</p>
              <p className={style.dis}>Samudram is an ocean hazard monitoring platform built to connect citizens and authorities in real time. We combine citizen reports, satellite & social media data, and verified alerts from agencies to create a trusted disaster dashboard. Our mission is simple yet powerful: empower every citizen to be a guardian of the sea, and every authority to act with precision and confidence</p>
              <div className={style.img3}>
                <img src="/about1.png" alt="" />
              </div>
            </div>
            <div className={style.right}>
              <div className={style.img}>
                <img src="/about2.png" alt=""   />
              </div>
              <div className={style.imgcont}>
                <div className={style.img1}>
                <img src="/about3.png" alt=""  />
                </div>
                <div className={style.img2}>
                <img src="/about4.png" alt=""  />
                </div>
              </div>
               <div className={style.head}>Our Mission & Our Vision</div>
              <p className={style.dis}>To empower citizens and authorities with real-time ocean intelligence, enabling faster reporting, smarter decisions, and safer coastlines. Harnessing the power of citizens, AI, and data to build a trusted network that detects, verifies, and responds to coastal hazards. To connect communities and agencies through timely alerts, citizen reports, and verified data for effective disaster response.</p>
              <p className={style.dis}>A future where every coastline is resilient, every citizen is informed, and every authority acts with precision. To become the world’s most trusted citizen-driven platform for coastal safety and ocean hazard intelligence. An empowered global community where technology, science, and citizens work together to protect lives and the sea.</p>
            </div>
          </div>
        </div>
        <div className={styl.container}>
          <div className={style.heading}>Contact Us</div>
          
          <div className={styl.cont}>
            <div className={styl.left}>
            <div className={styl.head1}>Send a message</div>
            <div className={styl.nameinput}>
            <input type="text" className={styl.namefirst} placeholder='First Name'/><input type="text" className={styl.namesecond} placeholder='Last Name'/>
            </div>
<input type="email" placeholder='Your Email' />
<input type="text" value={"+91"} className={styl.fixed}/><input type="number"  placeholder='Phone number' className={styl.number}/>
<textarea name="" id="" rows={4} className={styl.textarea} placeholder='How can we help?'></textarea>
<button className={styl.submit}>Submit</button>
            </div>
            <div className={styl.right}>
              <div className={styl.head}>Get in Touch</div>
              <div className={styl.location}>📍 Location</div>
              <p className={styl.locat}>Marine Drive, Mumbai, India</p>
              <div className={styl.location}>📧 Email</div>
              <p className={styl.locat}>support@samudram.org</p>
              <div className={styl.location}>📞 Phone</div>
              <p className={styl.locat}>+91 98765 43210</p>
            </div>
          </div>

<div className={styl.footer}>© 2025 Samudram. All rights reserved.</div>
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
          
        {response && (
          <>
          <h4 className ={styles.head4}>Response Generated</h4>
          <span className = {styles.res}>{response.data || response.message}</span>
          </>)}
        </div>

      </div>
  )}
  
  
    </>
  )
}

export default Main
