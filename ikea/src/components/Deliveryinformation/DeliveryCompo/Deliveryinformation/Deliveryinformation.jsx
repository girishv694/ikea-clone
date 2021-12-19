import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './deliveryinformation.css';


export const Deliveryinformation =() => {

    const [data, setData] = useState([])
   

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () => {
        const data1 = await axios.get("http://localhost:3001/cart/")
        console.log(data1.data.data);
        setData(data1.data.data)
    }

    return(
        <>
            <div id="delinfmsu">
                {/* 1st grid */}
                <div>
                    <div id="deltitsu">Delivery information</div>
                    <div>Delivery date</div>
                    <div><input type="datetime-local" /></div>
                    <div id="billdetsudel">Billing Details</div>
                    <div style={{display:"flex"}}>
                        <div><input type="radio" />Individual</div>
                        <div><input type="radio" />Business</div>
                    </div>
                    <div id="enternamebillpansu">Enter your name as per PAN</div>
                    <div className="allinpumarg24delsu">
                        <label>First name*:</label><br/>
                        <input className="allinpudelsu" type="text" placeholder="First name"/>
                    </div>
                    <div className="allinpumarg24delsu">
                        <label>Middle name:</label><br/>
                        <input className="allinpudelsu" type="text" placeholder="Middle name"/>
                    </div>
                    <div className="allinpumarg24delsu">
                        <label>Last name*:</label><br/>
                        <input className="allinpudelsu" type="text" placeholder="Last name"/>
                    </div>
                    <div className="allinpumarg24delsu">
                        <label>PAN:</label><br/>
                        <input className="allinpudelsu" type="text" placeholder="Last name"/>
                    </div>
                    <div className="allinpumarg24delsu">
                        <label>Address*:</label><br/>
                        <input className="allinpudelsu" type="text" placeholder="Address"/>
                    </div>
                    <div className="allinpumarg24delsu">
                        <label>Address2:</label><br/>
                        <input className="allinpudelsu" type="text" placeholder="Address 2"/>
                    </div>
                    <div className="allinpumarg24delsu">
                        <label>Landmark*:</label><br/>
                        <input className="allinpudelsu" type="text" placeholder="Landmark"/>
                    </div>
                    <div className="allinpumarg24delsu">
                        <label>Pin Code:</label><br/>
                        <input className="allinpudelsu" type="text" placeholder="Pin code"/>
                    </div>
                    <div className="allinpumarg24delsu">
                        <label>City:</label><br/>
                        <input className="allinpudelsu" type="text" placeholder="City"/>
                    </div>
                    <div className="allinpumarg24delsu">
                        <label>State*:</label><br/>
                        <input className="allinpudelsu" type="text" placeholder="State"/>
                    </div>
                    <div className="allinpumarg24delsu">
                        <label>Country*:</label><br/>
                        <input className="allinpudelsu" type="text" placeholder="Country"/>
                    </div>
                    <div className="allinpumarg24delsu">
                        <label>Email*:</label><br/>
                        <input className="allinpudelsu" type="text" placeholder="enter your email"/>
                    </div>
                    <div className="allinpumarg24delsu">
                        <label>Verify Email Address*:</label><br/>
                        <input className="allinpudelsu" type="text" placeholder="Re enter your email"/>
                    </div>
                    <div className="allinpumarg24delsu">
                        <label>Phone*:</label><br/>
                        <input className="allinpudelsu" type="number" placeholder="phone"/>
                    </div>
                    <div className="allinpumarg24delsu">
                    It is absolutely important that you enter a valid phone<br/> number so we are able to reach you if necessary.<br/> Please read our Terms and Conditions and Privacy policy,<br/> this is to protect your data carefully.
                    </div>
                    <div className="allinpumarg24delsu">
                        <input type="checkbox" /> Deliver to this address
                    </div>
                    <div className="allinpumarg24delsu">The fields marked with a * are mandatory fields.</div>
                    <div className="allinpumarg24delsu" style={{display:"flex"}}>
                       <button id="retretretsu">Return</button>
                      <NavLink to="/review">  <button id="proceederdelsu">Proceed to pay</button></NavLink>
                    </div>
                    <div style={{height:"200px"}}></div>
                </div>
                {/* 2nd grid */}
                {data.map((e)=>(
                <div id="del2ndsu">
                    <div id="fexerdelsu">
                        <div>Order summary</div>
                        <div className="allinpumarg24delsu" id="orderdetdelsu">
                            <div><img src={e.image} alt="" width="100px"/></div>
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
                </div>
                ))}
            </div>
            <img style={{marginLeft:"30px"}} src={require("./Card.png")} alt="blue" />
        </>
    )
}