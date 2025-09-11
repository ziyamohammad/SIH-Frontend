
import React, { useState } from 'react'
import styles from "../css/Authsignup.module.css"
import axios from 'axios'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router';

function AuthSignup() {
    const[alert,setAlert]=useState([])
    const[alert1,setAlert1]=useState([])
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[location,setLocation]=useState("")
    const[gender,setGender]=useState("")
    const[agency,setAgency]=useState("")
    const[password,setPassword]=useState("")
    const[confirmpass,setConfirmpass]=useState("")
    const [loading, setLoading] = useState(false)
    const navigate =useNavigate()
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

    const handleauthsignup = async (e) => {
  e.preventDefault(); 
  setLoading(true)
  try {
    const response = await axios.post(
      'https://sih-backend-dsdf.onrender.com/api/v1/user/register/authority',
      {
        name: name,
        officialEmail: email,
        officeLocation: location,
        agencyName: agency,
        gender: gender,
        password: password,
        alerts: [],
      },
      { withCredentials: true }
    );

    console.log(response.data.rootUser.authorities);
    setAlert(response.data.rootUser.authorities.find((a)=>a.name === name))
    console.log(alert._id)
    navigate("/authlogin")
    
    toast.success(`Your unique authority id is ${alert._id} ! \n Please save it for login purpose 🎉`)
    setName("")
    setEmail("")
    setPassword("")
    setAgency("")
    setLocation("")
    setGender("")
    setConfirmpass("")

  } catch (error) {
    console.log("Some error occurred:", error);
  }finally {
      setLoading(false) // 👈 button loading end
    }
};



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
        <form onSubmit={handleauthsignup}>
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
            <button className={styles.but} type="submit"  disabled={loading}>{loading ? "Creating Account..." : "Create Authority Account"}</button>
        </form>
        <div className={styles.login}>
        <span className={styles.log}>Already have an account?</span>
        <span className={styles.log1} onClick={()=>{navigate("/authlogin")}}>Login Here</span>
        </div>
      </div>
    </div>
  )
}

export default AuthSignup
