import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navbar2 } from '../../Deliveryinformation/DeliveryCompo/Navbar2/Navbar2';
import { Status } from '../../Deliveryinformation/DeliveryCompo/Status/Status';
import { Footer } from '../../HomePage/HomeCompo/Footer/Footer';
import './Revieworder.css';
import {NavLink} from "react-router-dom"
function Revieworder(){
    const [data, setData] = useState([])
   

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () => {
        const data1 = await axios.get("http://localhost:3001/cart/")
        setData(data1.data.data)
    }


    return (
        <>
        <div style={{marginBottom:"50px"}}>
        <Navbar2 />
        <Status />
        </div>
        <div className='Grid'>
        <div className="Review">
            
           
          <div className='Orderreview'>
              <p id='Orderreviewpara'>Review Your Order</p>
          </div>

          <div className='Invoice'>
              <div className='InvoiceA'>
                  <p id='InvoiceApara'>Invoice data :</p>
              </div>
              <div className='InvoiceB'>
                  <p id='InvoiceBpara'>Ankur jangir Navi Mumbai  410206 Navi Mumbai  Maharstra India ankur@gmail.com +91 9008029567 </p>
              </div>
              <div className='InvoiceC'>
                  <button id='InvoiceCbtn'>Edit Order</button>
              </div>
          </div>

          <div className='Deliverydate'><p id='Deliverydatepara'>Delivery Date:</p></div>
            <div className='Deliverydate'><p id='Deliverydateparb'>2021 12-06 09:00-21:00</p></div>

            <div className='OrderpromiseA'><p>Delivery Method: Your order will be delivered to you by our parcel service provider to the room fo your choice</p></div>
             <div className='OrderpromiseB'><p>provider to the room fo your choice</p></div>

             <div className='Changeinformation'>
                <div className='Changebtn'>
                    <button id='BtnA'>Change Delivery Information</button>
                </div>
                <div className='Editbtn'>
                    <button id='BtnB'> Edit Order</button>
                </div>
                  
             </div>

             <div className='Checkbox'>
  <input type="checkbox" id="scales" name="scales"
         unchecked/>
  <label for="scales">I Accept all Term's and condition</label>
</div>

<div className='Paynow'>
  <NavLink to="/payment">  <button id='Paynowbtn'>Pay Now</button></NavLink>
</div>


          


        </div>


  {/* 2nd grid start */}

  
 <div id="del2ndsu">
     {data.map((e)=>(
                    <div id="fexerdelsu">
                        <div>Order summary</div>
                        <div className="allinpumarg24delsu" id="orderdetdelsu">
                            <div><img src="images/heartrated1.png" alt="" /></div>
                            {/* 2nd grid */}
                            
                                
                            <div>
                                <div><p><b>{e.name}</b></p></div>
                                <div><p>LED Work Lamp</p></div>
                                <div>white,silver color</div>
                                <div>Article no:703.372.32</div>
                                <div><p><b>1 item</b></p></div>
                                <div><p><b>Total</b></p></div>
                            </div>
                            {/* 3rd grid */}
                            <div style={{textAlign:"center"}}>
                                <div>Edit</div>
                                <div style={{marginTop:"170px"}}><b>Rs. {e.price}.00</b></div>
                            </div>
                            
                             
                        </div>
                        <div id="lastdelprisu">
                            <div>
                                <div><b>Order value:</b></div>
                                <div>Delivery fee/Picking fee</div>
                            </div>
                            <div id="totallerdelsusuus"><b>Rs. {e.price}.00</b>
                            <div>Rs. 139.00</div>
                            </div>
                        </div>
                        <hr/>
                        <div id="lastdelprisu1">
                            <div><b>Total amount:</b></div>
                            <div id="totalleftydelisu"><b>Rs. {e.price+139}.00</b></div>
                        </div>
                        
                        
                    </div>
                    ))}
                </div>

  {/* 2nd grid end */}
            

        </div>
        <img style={{marginTop:"140px", marginLeft:"25px"}} src={require("./Card.png")} alt="img" />
        <Footer />
        </>
    )
}

export default Revieworder;