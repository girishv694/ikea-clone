import { React } from 'react'
import './Two.css'
import axios from 'axios'
import firebase from './firebase'
import { Link } from 'react-router-dom'
import arrow from './icons8-left-arrow-32.png'
import { useState, useEffect } from 'react'
import SignInWithFirebase from './SignIn'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom'




function Two() {
  let history = useHistory()
  const notify = () => toast("OTP has been sent");
    const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(null)
  const [num, setNum] = useState(0)
  const [num1, setNum1] = useState(0)
  const [arbs, setArb] = useState(0)
  const [stat,setStat] = useState(false);
  const[counter,setcounter] = useState(59);
  const[msg,setmsg] = useState(false);
  

   
     const SignInWithFirebase = () =>{
        
        var google_provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(google_provider)
        .then((res)=>{
            console.log(res)
          history.push("/products")
           
        })
        .catch((err)=>{
            console.log(err)
        })
     } 

     const OTP = async()=> {
   
    setStat(true);
    notify();
    
    let arb = Math.floor(Math.random() * 10000)
    setArb(arb)
    try {
      console.log('read here')

      //commented to save 50 tries, please use cautiously
      //extra
      const response = await axios.get(`
      http://2factor.in/API/V1/f98378b5-5f12-11ec-b710-0200cd936042/SMS/${num}/${arb}`)
      console.log(response)
      
      

    } catch (error) {
      console.error(error)
    }
    setShow(!show)
  }

  useEffect(()=>{
    const timer = counter > 0 && setInterval(()=>{
      setcounter(counter-1) },1000);
      return () => clearInterval(timer);

   

  },[counter])




  function OTPC() {
    if (arbs === +num1) {
      setShow2(true)

      history.push("/products")
    } else {
      setShow2(false)
      alert("pls check")
    }
  }
  return (
    <>
   
       
    
    
    
    <div className = "g_main">
            <div className="gsub1">
              <div className="g_flex">
              <div>
                <img className="g_arrow" src = {arrow}/>
              </div>
              <div className="gsub11">
                <img src = "https://in.accounts.ikea.com/resources/static/logo.svg"/>
              </div>
              </div>
              <p className="g_enter"><span className="g_span">
              Enter</span> your OTP received from IKEA.</p>
              
              <div className="g_sub">Too many passwords?<br/>
You can now login with an OTP we will send on your email address or verified mobile number.</div>
              


<div className="g_sub2">
Access your IKEA account using your email address to add and verify your mobile number.
</div>


              </div>

              
          
          <div className="gsub2">
           {/* <input type="text" placeholder="Enter number" 
              onChange={(e)=>{setNum(e.target.value)}} className="g_input" required/> */}
               <form  className = "g_new"noValidate autoComplete="off">
    <TextField id="standard-basic" className = "g_input" label="Enter Mobile Number" 
    onChange={(e)=>{setNum(e.target.value)}} />
    </form>

   {
       stat ? <div><input
       onChange={(e) => setNum1(e.target.value)}
       type='text'
       placeholder=' Enter OTP'
       className='input_p1'
       maxLength='4'
       minLength='4'
     ></input> <span className="resend">
           Resend OTP in :00:{counter}</span></div>
      
       : null
   }


   {
     stat ? <div><button onClick={OTPC} className="g_btn">Continue</button></div> : <button onClick={OTP}  className="g_btn">Continue</button>
   }
           
        

        <button onClick={SignInWithFirebase} className="g_btn1">Signup with google</button>

        <p className="g_para">Do not have an IKEA account? Create one now :</p>
            
         <ToastContainer className=""/>
         
           
          
          
         
       </div>
       </div>
   
    </>
  )
}


export default Two
