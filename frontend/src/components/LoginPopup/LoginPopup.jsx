import React,{ useContext, useState} from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const LoginPopup = ({setShowLogin}) => {


  const {url} = useContext(StoreContext)

       const [currState,setCurrState] = useState("Login")
       const [data,setData] = useState({
        name:"",
        email:"",
        password:""
       })

       const onChangeHandler = (event) =>{
        const name =event.target.name;
        const value =event.target.value;
        setData(data=>({...data,[name]:value}))
       }

     const onLogin = async (event) => {

     }
        

  return (
    <div className='login-popup'>
       <form onSubmit={onLogin} className='login-popup-container'>
        <div className="login-popup-title"> 
            <h1>{currState}</h1>
            <img onClick={()=>setShowLogin(false)}  src={assets.cross_icon} alt=''/>
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:
            <input name ='name' onChange={onChangeHandler} value = {data.name} type="text" placeholder='Your name' required />}
            
            <input name='email'  onChange= {onChangeHandler} value = {data.email}  type ="email" placeholder='Your email' required />
            <input name='password'  onChange={onChangeHandler} value ={data.password} type="password" placeholder='Password' required />
        </div>   
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing,i agree to the terms of use & privacy police.</p>
        </div>
        {currState==="Login"
        ?<p>Create a new account?<span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
        :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
        }
       </form>
      
    </div>
  )
}

export default LoginPopup
