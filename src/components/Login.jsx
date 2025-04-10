import React, { useState } from "react";
import {Link, Navigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import "./Login.css";
import { useAuth } from "../hooks";
const Login = () => {
  const {register,login}=useAuth()
const[toggle,settoggle]=useState(true) 
const[redirect,setredirect]=useState(false) 
const [signindata,setsigindata]=useState({
  loginemail:'',
  loginpassword:'',
  
})
const [signupdata,setsigupdata]=useState({
  username:'',
  email:'',
  password:'',
  contact:'',
  address:'',
  college:'',
  course:'',
  enrollment:'',
})
const { 
  loginemail,
  loginpassword,}=signindata

const {
   username,
  email,
  password,
  contact,
  address,
  college,
  course,
  enrollment,}=signupdata

const handeltoggle=()=>{
if(toggle){
  settoggle(false)
}
else{
  settoggle(true)
}
}

const handelSignUpChange=(e)=>{
  const {name,value}=e.target
  setsigupdata({...signupdata,[name]:value})

}

const handelSignInChange=(e)=>{
  const {name,value}=e.target
  setsigindata({...signindata,[name]:value})

}
const handelSignInClick=async(e)=>{
  e.preventDefault()

const res=await login(signindata)
  if(res.success){
    toast.success(res.message)
    setredirect(true)
    return
  }
  toast.error(res.message)

}
const handelSignUpClick=async(e)=>{
  e.preventDefault()
  const res=await register(signupdata)
  
  if(res.success){
    toast.success(res.message)
    setredirect(true)
    return
  }
  toast.error(res.message)
}
if (redirect) {
  return <Navigate to={'/profile'} />;
}  
  return (
    <div className="login_body">
      <div className="login_container" id="login_container" >
       {toggle?(<div className="login_form-container login_sign-up">
          <form>
            <h1>Create Account</h1>
            <div className="login_social-icons">
              <Link to='/social' className="login_icon">
                <i className="fa-brands fa-google-plus-g"></i>
              </Link>
              <Link to='/social' className="login_icon">
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link to='/social' className="login_icon">
                <i className="fa-brands fa-github"></i>
              </Link>
              <Link to='/social' className="login_icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
            </div>
            <span>or use your email for registeration</span>
            <input type="text" placeholder="Name" name="username" value={username} onChange={handelSignUpChange} required/>
            <input type="email" placeholder="Email" name="email" value={email} onChange={handelSignUpChange} required/>
            <input type="password" placeholder="Password" name="password" value={password} onChange={handelSignUpChange} required/>
            <input type="tel" placeholder="Phone number" name="contact" value={contact} onChange={handelSignUpChange} required/>
            <input type="text" placeholder="Address" name="address" value={address} onChange={handelSignUpChange} required/>
            <input type="text" placeholder="College" name="college" value={college} onChange={handelSignUpChange} required/>
            <input type="text" placeholder="Enrollment " name="enrollment" value={enrollment} onChange={handelSignUpChange} required/>
            <input type="text" placeholder="Course " name="course" value={course} onChange={handelSignUpChange} required/>
            <button onClick={handelSignUpClick}>Sign Up</button>
          </form>
        </div>):
       (<div className="login_form-container login_sign-in">
          <form>
            <h1>Sign In</h1>
            <div className="login_social-icons">
              <Link to='/social' className="login_icon">
                <i className="fa-brands fa-google-plus-g"></i>
              </Link>
              <Link to='/social' className="login_icon">
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link to='/social' className="login_icon">
                <i className="fa-brands fa-github"></i>
              </Link>
              <Link to='/social' className="login_icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
            </div>
            <span>or use your email password</span>
            <input type="email" placeholder="Email"  name="loginemail" value={loginemail} onChange={handelSignInChange}/>
            <input type="password" placeholder="Password" name="loginpassword" value={loginpassword} onChange={handelSignInChange}/>
            <Link to='/social'>Forget Your Password?</Link>
            <button onClick={handelSignInClick}>Sign In</button>
          </form>
        </div>
        )}
        <div className="login_toggle-container">
          <div className="login_toggle">
            {toggle?(<div className="login_toggle-panel login_toggle-left">
              <h1>Welcome Back !</h1>
              <p>Enter your personal details to use all of site features</p>
              <button
                className="login_hidden"
                id="login_login"
                onClick={handeltoggle}
              >
                Sign In
              </button>
              {/* <button className="login_hidden" id="login_login" onClick={loginClick}>Upload Directly</button> */}
            </div>):
           (<div className="login_toggle-panel login_toggle-right">
              <h1>Welcome, Friend!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button
                className="login_hidden"
                id="login_register"
                onClick={handeltoggle}
              >
                Sign Up
              </button>
              {/* <button className="login_hidden" id="login_login" onClick={registerClick}>Upload Directly</button> */}
            </div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
