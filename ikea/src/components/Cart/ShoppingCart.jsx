import styled from "styled-components"
import LightVector from "./images/LightVector.png"
import Print from "./images/Print.png"
import Lamp from "./images/Lamp.png"
import styles from "./cart.module.css"
import Delete from "./images/Delete.png"
import Truck from "./images/Truck.png"
import Blacktruck from "./images/Blacktruck.png"
import Click from "./images/Click.png"
import Card from "./images/Card.png"
import { useEffect, useState } from "react"
import { CartDetails } from "./CartDetails"
import axios from "axios"
import {Footer} from "../HomePage/HomeCompo/Footer/Footer"
import {Navbar} from "../HomePage/HomeCompo/Navbar/Navbar"



const ShoppingCart = () => {
    const [state, setState] = useState(false)
    const [delivery, setDelivery] = useState(false)
    const [wrong, setWrong] = useState(false)
    const [pin, setPin] = useState([])
    const [data, setData] = useState([])
    const [proceed, setProceed] = useState(1)


    useEffect(()=>{
        cartData()
    },[data])

    const cartData = async() => {
        const cart = await axios.get("http://localhost:3001/cart/")
        console.log(cart.data);
        setData(cart.data.data)
    }


    const handleRemove = () => {
        setState(true)
    }
    const handleClick = () => {
        setState(false)
    }

    const handleDelivery = () => {
        setDelivery(true)
    }

    const handlePin = (e) => {
        if (e.target.value === "") {
            setWrong(false)
        }
        setPin(e.target.value)

    }

    const handleProceed = () => {
        if (pin.length === 6) {
            setWrong(false)
            return alert("proceed")
        } else {
            setWrong(true)
        }
    }

    const handleDelete = async(bag) =>{
        const cart = await axios.delete(`http://localhost:3001/cart/delete/${bag}`)
        
    }

  /*   const handleselect = (e) => {
        console.log(e.target.value);
        setProceed(e.target.value)
    } */



    return (
        <>
        <Navbar />
        <div className={styles.Maindiv}>
            <div className={styles.Headdiv}>
                <h1 className={styles.Cart}>Shopping Cart<span className={styles.Down}><img src={LightVector} alt="vecotr" /></span><span className={styles.Imgprint}> <img src={Print} alt="print" /></span></h1>
            </div>
            {data.length>0 ? 
                <>
                {data.map((e)=>(
                    <div key={e._id}>
                    <div  className={styles.Cont}>
                        <img className={styles.Image} src={e.image} alt="lamp" width="300px"/>
                        <h1 className={styles.Name}>{e.name} </h1>
                        <h2 className={styles.price}> Rs. {e.price}.00</h2>
                        <p className={styles.led}>LED work lamp</p>
                        <p className={styles.color}>White</p>
                        <p className={styles.serial}>704.049.22</p>
                        <p className={styles.kilo}>1.07 Kg per piece</p>
                        {state ?
                            <div className={styles.remove}>
                                <h5 className={styles.sure}>Are you sure you want to remove this item from <br /> <span className={styles.shop}>Shopping Cart?</span> </h5>
                                <button className={styles.itemcan} onClick={handleClick}>Cancel</button>
                                <button className={styles.itemrem} onClick={()=>handleDelete(e._id)}>Remove</button>
                            </div> :
                            <>
                                <button className={styles.delete} onClick={handleRemove}>
                                    <img src={Delete} alt="delete" />
                                </button>
                                <select className={styles.opt} /* onChange={(e)=>handleselect(e)} */>
                                   {/*  {options.map((option,index) => ( */}
                                   
                                        <option value={proceed}>{proceed}</option>
                                        <option onChange={()=>setProceed(proceed+1)} value={proceed}>{proceed}</option>{/* 
                                        <option  value={setProceed(proceed+1)}>{proceed}</option> */}{/* 
                                        <option  value={setProceed(proceed+1)}>{proceed}</option>
                                        <option  value={setProceed(proceed+1)}>{proceed}</option>
                                        <option  value={setProceed(proceed+1)}>{proceed}</option> */}
                                    {/* ))} */}
                                </select>
                            </>
                        }
                    </div>
                    
                    <p className={styles.line}>...........................................................................................................................................................................................................................................................................</p>
                    <h2 className={styles.total}>Subtotal <span className={styles.final}>Rs. {e.price}.00</span> </h2>
                    <p className={styles.line1}>...........................................................................................................................................................................................................................................................................</p>
                    </div>
                    ))}
                    <div className={styles.make}>
                        <div className={styles.truck}>
                            <img src={Truck} alt="truck" />
                        </div>
                        <p className={styles.order}>Make the most of delivery (order from 0Kg to 3Kg : Rs.199)</p>
                        <p className={styles.cost}>The cost of delivery varies according to the weight of your order.</p>
                        <h5 className={styles.weight}>Weight of your order: 1.48 Kg</h5>
                        <p className={styles.remaining}>Remaining weight: 1.52 Kg</p>
                    </div>
                    <h4 className={styles.like}>How would you like to receive your order</h4>
                    {delivery ?
                        <>
                            <button className={styles.btn} onClick={handleDelivery}>
                                <img className={styles.blue} src={Blacktruck} alt="blue" />
                                <h5 className={styles.hd}>Home Deivery</h5>
                            </button>
                            <button className={styles.collect}>
                                <img className={styles.blue} src={Click} alt="blue" />
                                <h5 className={styles.hd}>Click & collect</h5>
                            </button>
                            <p className={styles.pin}>Enter a PIN code to see product availability and delivery options</p>
                            <input type="number" className={styles.inputcode} onChange={handlePin} placeholder="Label" value={pin} />
                            {wrong ? <div className={styles.wrongpin}>Please enter correct Pin code</div> : <h4></h4>}
                            <button className={styles.proceed} onClick={handleProceed}>
                                Proceed
                            </button>
                            <img className={styles.card1} src={Card} alt="blue" />
                        </> : <>
                            <button className={styles.btn} onClick={handleDelivery}>
                                <img className={styles.blue} src={Blacktruck} alt="blue" />
                                <h5 className={styles.hd}>Home Deivery</h5>
                            </button>
                            <button className={styles.collect}>
                                <img className={styles.blue} src={Click} alt="blue" />
                                <h5 className={styles.hd}>Click & collect</h5>
                            </button>
                        </>
                    }
</>
          : <CartDetails />  }
                    <img className={styles.card} src={Card} alt="blue" />
                
        </div>
        <div className={styles.footer}>
        <Footer />
        </div>
        </>
    )
}

export { ShoppingCart }