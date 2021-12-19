import './ShopingCart.css';
import NavElement from '../Page1/NavElement';
import { useEffect, useState } from 'react';
import adress from './images/productimg.png'
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import { Navbar2 } from '../Deliveryinformation/DeliveryCompo/Navbar2/Navbar2';
import { Footer } from '../HomePage/HomeCompo/Footer/Footer';
import Card from "./images/Card.png"

function ShopingCart(){
    const [data, setData] = useState([])
   

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () => {
        const data1 = await axios.get("http://localhost:3001/cart/")
        console.log(data1.data.data);
        setData(data1.data.data)
    }
    return (
        <>
        <Navbar2 />
        <div className='Parantdiv'>
        {data.map((e)=>(
             
            <>
            {/* shopingstate Start */}

            <div className='Shopingstate'>
                <div className='ShopingstateA'>
                         <div id='Arrow'>
                               <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path opacity="0.3" d="M0 1C0 0.447716 0.447715 0 1 0H15.9102C16.2577 0 16.5803 0.180389 16.7622 0.476446L21.6783 8.47645C21.8756 8.79759 21.8756 9.20241 21.6783 9.52355L16.7622 17.5236C16.5803 17.8196 16.2577 18 15.9102 18H1C0.447715 18 0 17.5523 0 17V1Z" fill="#484848"/>
                              </svg>

                         </div>
                         <div id ="Paradiv">
                            <p id ="Para">Shopping Cart (Step 1 of 3)</p>
                         </div>
                         

                </div>
                <div  className='ShopingstateB'>
                      <div id='Arrow'>
                               <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path opacity="0.3" d="M0 1C0 0.447716 0.447715 0 1 0H15.9102C16.2577 0 16.5803 0.180389 16.7622 0.476446L21.6783 8.47645C21.8756 8.79759 21.8756 9.20241 21.6783 9.52355L16.7622 17.5236C16.5803 17.8196 16.2577 18 15.9102 18H1C0.447715 18 0 17.5523 0 17V1Z" fill="#484848"/>
                              </svg>

                         </div>
                         <div id ="Paradiv">
                            <p id ="Para">Delivery information (Step 2 of 3)</p>
                         </div>
                </div>
                <div  className='ShopingstateC'>
                             
                             <div id='Arrow'>
                               <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path opacity="0.3" d="M0 1C0 0.447716 0.447715 0 1 0H15.9102C16.2577 0 16.5803 0.180389 16.7622 0.476446L21.6783 8.47645C21.8756 8.79759 21.8756 9.20241 21.6783 9.52355L16.7622 17.5236C16.5803 17.8196 16.2577 18 15.9102 18H1C0.447715 18 0 17.5523 0 17V1Z" fill="#484848"/>
                              </svg>

                         </div>
                         <div id ="Paradiv">
                            <p id ="Para">Delivery information (Step 2 of 3)</p>
                         </div>

                </div>

            </div>

               {/* shopingstate   End*/}

               {/* your shoping cart para start */}
                 
                 <div className='Yourshoping'>
                      <p  id='Yourshopinpara'>Your Shopping cart </p>
                 </div>

                 {/* your shoping cart para End */}

                 {/* Dash Line start */}
                 
                 <div className='Dashline'></div>

                 {/* Dash Line end */}

                 {/* Shoping item image box Start */}


                
                 <div className='Productimageprice'>
                     <div className='Productimage'>
                         <div className='ProductimageA'>
                            

                             
                            
                             <div id='ImageA'>
                                 <img className='Img' src= {e.image}/>
                             </div>
                             <div id='ImageB'>
                                  <div>
                                      <p id='Harte'>{e.name}</p>
                                  </div>
                                  <div>
                                      <p  id ='Led'>LED Work lamp</p>
                                  </div>
                                  <div>
                                      <p id='Price'> Rs. {e.price}.00</p>
                                  </div>
                                  
                          <div>
                                      <p id='White'>white silver colour</p>
                                  </div>
                                  <div>
                                      <p id='Article'>
                                          Article no:703.372.92
                                      </p>
                                  </div>
                             </div>
                         </div>
                           <div className ='Togglebutton'>
                               <button>1</button>
                               <button>DELETE</button>
                           </div>
                           
                     </div>
                     <div className='Productprice'>
                            <div className='ProductpriceA'>
                                <div className='Total'> <p id='Totalcontent'>Total</p></div>
                                <div className='Productvolume'> <p id='Productvolumecontent'>1 product in shoping cart </p></div>
                                <div className='Delivery'><p id='Deliverypara'>Delivery/Packageing fee</p></div>
                                <div className='Total'><p id='Totalcontent'>Total Amount :</p></div>
                            </div>
                         
                            <div className='ProductpriceB'>
                                <div className='Totalprice'><p id='Totalpricecontent'> Rs. {e.price}.00</p></div>
                                <div className='Deliverycharge'><p id='Deliverychargecontent'>Rs. 199.00</p></div>
                                <div className='Totalamount'>  <p id='Totalamountcontent'> Rs. {e.price+199}.00</p></div>
                                <div className='Tax'><p id='Taxcontent'>All price are inclusive of tax</p></div>
                            </div>
                          
                     </div>
                 </div>
                
                 {/* Shoping item image box End */}

                    <div className='Dashline'></div>

                    {/* Order summary and cupan start */}

                    <div className='Ordersummary'>
                        <div className='Cupan'>
                            <div className='Addcupan'><p id='Addcupancontent'>Add your pramo/cupan code here</p>
                                  

                            </div>

                            <div className='Cupaninput'>
                                <div><input type='text' value='APPLY PREMO/CUPAN'></input></div>
                                <div> <button>APPLY NOW</button></div>
                            </div>

                           <div className='Addcupan'><p id='Addcupancontent'>only pramo/cupan code per order</p>
                                  

                            </div>

                             <div className='Editorder'>
                              <button id='Btn2'>Edit Order</button>
                          </div>

                        </div>



                        <div className='Summary'>
                            <div className='Order'><p id='Ordercontent'>Order Summary</p></div>

                            <div className='Ordervalue'>
                                <div className='OrdervalueA'><p id='OrdervalueAcontent'>Order value:</p></div>
                                <div className='OrdervalueB'><p id='OrdervalueBcontent'>Rs. {e.price}.00</p></div>
                            </div>

                              
                             <div  className='Shipingvalue' >
                                <div className='ShipingvalueA'><p id='ShipingvalueAcontent'>Delivery fee/Picking charge</p>
                                              

                                </div>
                                <div className='ShipingvalueB'><p id='ShipingvalueBcontent'>Rs. 199.00</p></div>
                            </div>

                            <div className='Orderborder'></div>

                             <div className='Totalamount'>
                                <div className='TotalamountA'><p id='TotalamountAcontent'>Total Amount</p></div>
                                <div className='TotalamountB'><p id='TotalamountBcontent'>Rs. {e.price+199}.00</p></div>
                                  

                            </div>

                            <div className='Cardimg'>
                              <div className='Img1'>
                                  <img src={require('./images/vactor1.png')}></img>
                              </div>
                              <div className='Img2'>
                                   <img src={require('./images/vactor4.png')}/>
                              </div>
                              <div className='Img3'>
                                  <img src={require('./images/vactor3.png')}/>
                              </div>
                               <div className='Img4'>
                                  <img src={require('./images/vactor2.png')}/>
                              </div>
                            </div>

                            <div className='Paymentcondition'>
                                 <p id='Paymentconditioncontent'>We accept all above payment method</p>
                            </div>
                          
                          <div className='Placeorder'>
                             <NavLink to="/info"> <button id='Btn'>Place Order</button></NavLink>
                          </div>


                        </div>
                    </div>



                     {/* Order summary and cupan end */}

                     </>
                     ))}
        </div>
        <img style={{marginLeft:"20px"}} src={Card} alt="blue" />
        <Footer />
        </>
    )
}

export default ShopingCart;