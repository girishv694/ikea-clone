import PaymentBox from "./PaymentBox";
import '../componentsCss/Payment.css'
import UpiBox from "./UPiBox";
import adress from './images/Bhimlogo.png'
import { useHistory } from "react-router-dom";



function Payment () {
    const history = useHistory()
    return (
        <div className="Payment">

         <div className="Paymenta">
           
            <div>
               <PaymentBox></PaymentBox>
             </div>

             <div>
                   <UpiBox></UpiBox>
             </div>
             <div className='Buttondiv' style={{marginLeft:"240px", width:"600px",}}>
                <button style={{border: "1px solid #DBE7F2",  marginLeft:"60px"}}>Verify</button>
                <button style={{border: "1px solid #DBE7F2", marginLeft:"30px"}} onClick={()=>{
                    alert("Payment Successfull")
                    history.push("/")
                }}>PayNow</button>
             </div>
            {/*  <div>
                 <a style={{color:"blue", textDecoration:"underline",marginLeft:"330px", padding:"40px"}}>cancel</a>
             </div> */}

             {/* <div className="Paymentb">
                
                     
                         <div className="insidePaymentb">
                             <div className="bhimlogoa">
                               
                                 
                                 <img className="bhimlogob" src = {adress}></img>

                             </div>
                                   <div className="bhimlogoc">
                                       <p>Supported </p>
                                    </div>
                                   
                              
                            
                         </div>

                         <p >for the List of all Upi supported banks clickhere </p>
                     
                   
                
             </div> */}
         </div>

         <div className="Payment2">
             <div>
                

              <img src={require('./images/visa.png')}/>
             </div>
             <div>
               <img src= {require('./images/security.png')}/>
             </div>

             <div className="Worldline">
             <img src= {require('./images/worldline.png')}/>
             </div>

            


           </div>
           
         
           
                  <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="6" height="6" fill="#333333"/>
                    </svg>
              

                

                     
                     

                 
            
        </div>
    )
}
export default Payment;