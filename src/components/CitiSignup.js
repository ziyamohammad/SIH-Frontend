import React, { useState } from 'react'
import styles from "../css/Citisignup.module.css"
import axios from 'axios'
import { toast } from 'react-toastify'

function CitiSignup() {
        const[name,setName]=useState("")
        const[email,setEmail]=useState("")
        const[location,setLocation]=useState("")
        const[gender,setGender]=useState("")
        const[age,setAge]=useState("")
        const[password,setPassword]=useState("")
        const[confirmpass,setConfirmpass]=useState("")
        const [loading, setLoading] = useState(false) 
        const handlecitisignup = async(e)=>{
            e.preventDefault();
            setLoading(true)
       try {
         const response = await axios.post('https://sih-backend-dsdf.onrender.com/api/v1/user/register/citizen',
         {
         name: name,
         email: email,
         age:age,
         location:location,
         gender:gender,
         password:password,
         alerts: [],
       },
       { withCredentials: true }
    )
     console.log(response)
     toast.success("Citizen Registered successfully 🎉")
     setName("")
    setEmail("")
    setPassword("")
    setAge("")
    setLocation("")
    setGender("")
    setConfirmpass("")
    } catch (error) {
        console.log("Something went wrong",error)
       }finally {
      setLoading(false)
    }
    }
  return (
    <div className={styles.citisignup}>
        <div className={styles.image}>
            <div className={styles.childimage}>
            <img src="./citisignup.png" alt="/" height="100%" width="100%" />
            </div>
        </div>
        <div className={styles.form}>
                <h2>Join Samudram</h2>
                <span className = {styles.content}>Be the Voice of the Coast</span>
                <form onSubmit={handlecitisignup}>
                    <div className={styles.name}>
                        <label for ="name">Name</label>
                        <input type="text" placeholder="Enter your Full Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    </div>
                    <div className={styles.name}>
                        <label for ="email">Email</label>
                        <input type="text" placeholder="Enter your Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div className={styles.twofields}>
                    <div className={styles.name1}>
                        <label for ="age">Age</label>
                        <input type="text" placeholder="Enter Age" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
                    </div>
                    <div className={styles.name1}>
                        <label for ="gender">Gender</label>
                        <input type="text" placeholder="Enter Gender" value={gender} onChange={(e)=>{setGender(e.target.value)}}/>
                    </div>
                    </div>
                    <div className={styles.name}>
                        <label for ="location">Location</label>
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
                    <button className={styles.but} type="submit" disabled={loading}>{loading ? "Creating Account..." : "Create Account"}</button>
                </form>
                <div className={styles.login}>
                <span className={styles.log}>Already have an account?</span>
                <span className={styles.log1}>Login Here</span>
                </div>
              </div>
      
    </div>
  )
}

export default CitiSignup
