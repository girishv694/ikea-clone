import styles from "./product.module.css"
import RightVector from "./images/RightVector.png"
import Right from "./images/Right.png"
import Whitelamp from "./images/Whitelamp.png"
import Lamp from "./images/Lamp.png"
import Lamp1 from "./images/Lamp1.png"
import Lamp2 from "./images/Lamp2.png"
import Lamp3 from "./images/Lamp3.png"
import Lamp4 from "./images/Lamp4.png"
import Star from "./images/Star.png"
import Seen from "./images/Seen.png"
import Half from "./images/Half.png"
import Stock from "./images/Stock.png"
import Battery from "./images/Battery.png"
import Storecheck from "./images/Storecheck.png"
import Love from "./images/Love.png"
import Heart from "./images/Heart.png"
import Top from "./images/Top.png"
import { useEffect, useRef, useState } from "react"
import axios from "axios"
import styled from "styled-components"
import { SRLWrapper } from "simple-react-lightbox";
import { Sidebar } from './Sidebar'
import { NavLink } from "react-router-dom";
import {useParams} from 'react-router-dom';
import { Similarproducts } from "./Similarproducts"
import { Hover } from "./Hover"
import {Footer} from "../HomePage/HomeCompo/Footer/Footer"
import {Navbar} from "../HomePage/HomeCompo/Navbar/Navbar"

const Line = styled.hr`
/* position: relative; */
left: 0%;
right: 0%;/* 
margin-left: 2%; */
margin-top: 343%;
width: 90%;
border: 1px solid black;
`
const Line1 = styled.hr`
/* position: relative; */
left: 0%;
right: 0%;/* 
margin-left: 2%; */
margin-top: 60%;
width: 90%;
border: 1px solid black;
`


let detail;
const ProductDetail = () => {
    let { id }= useParams();
    const [data, setData] = useState([])
    const [sidebar, setSidebar] = useState(false)
    useEffect(() => {
        fetchData()
    }, [])

    
    const fetchData = async () => {
        const data1 = await axios.get(`http://localhost:3001/api/product/${id}`)
        detail = data1.data.data1.name
        setData(data1.data.data1)
    }

    const change = async(id) => {
        
        const bag = await axios.post(`http://localhost:3001/cart/${id}`)
        setSidebar(true)
    }


    return (
        <>
        <Navbar />
            <div className={styles.layout}>
                Products<span className={styles.right}> <img src={RightVector} alt="vector" /> </span>
                Lighting<span className={styles.right}> <img src={RightVector} alt="vector" /> </span>
                Lamps<span className={styles.right}> <img src={RightVector} alt="vector" /> </span>
                Table Lamps<span className={styles.right}> <img src={RightVector} alt="vector" /> </span>
                <h4 className={styles.lamp}>{data.name} LED work lamp</h4>
            </div>
            <div className={styles.images}>
                <div className={styles.append}>
                <SRLWrapper>
                    <img src={data.image} alt="lamp" width="400px" height="400px"/>
                    <img className={styles.lamp1} src={data.image1} alt="lamp" width="400px" height="400px" />
                    <img className={styles.white} src={data.image2} alt="lamp" width="400px" height="400px"/>
                    <img className={styles.lamp1} src={data.image3} alt="lamp" width="400px" height="400px" />
                    <img className={styles.white1} src={data.image4} alt="lamp" width="400px" height="400px"/>
                </SRLWrapper>
                </div>
                <div className={styles.random}>
                    <div className={styles.textp}>
                        <p className={styles.needs}>In the NAVLINGE series there are lamps for most needs. These are neat lamps with a design that blends into the room and they are easy to use anywhere in the home - and provide good, glare - free light.</p>
                        <p className={styles.assembly}>Delivery and assembly prices not included </p>
                        <p>Article Number</p>
                        <button className={styles.num}>704.049.22</button>
                    </div>
                </div>
            </div>
            <div className={styles.all}>
                <h2 className={styles.pd}>Product Details<span className={styles.go}><img src={Right} alt="right" /></span></h2>
                <h2 className={styles.measure}>Measurements<span className={styles.go1}><img src={Right} alt="right" /></span></h2>
                <h2 className={styles.review}>Reviews<span className={styles.go2}><img src={Right} alt="right" /></span></h2>
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <p className={styles.five}>(5)</p>
            </div>
            <div className={styles.sp}>
                <h2>Similar Products</h2>
                <Similarproducts />
            </div>
            <div className={styles.seen}>
                <h2>As seen in</h2>
                <div className={styles.disp}>
                    <img src={Seen} alt="seen" />
                    <img src={Seen} alt="seen" />
                </div>
            </div>
            <div className={styles.oav}>
                <h2>Other also viewed</h2>
                <div className={styles.use1}>
                <Hover />
                </div> 
            </div>
            <div className={styles.goes}>
                <h2>Goes Well with</h2>
                <img className={styles.bat} src={Battery} alt="battery" />
                <p className={styles.battery}>Battery alkaline, LR03 AAA 1.5v</p>
                <h3>Rs.<span className={styles.rate}>1,290 </span>/ 10 pack</h3>
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Half} alt="star" />
                <p className={styles.seven}>(17)</p>
            </div>
            <Line></Line>
            <div className={styles.more}>
                <h2>More from the {data.name} series</h2>
                <div className={styles.allimg}>
                    <div>
                        <img src={Lamp} alt="lamp" />
                        <p className={styles.work}>Led work lamp</p>
                        <h3 className={styles.Rs}>Rs.<span className={styles.rate}>1,290 </span></h3>
                        <div className={styles.starts}>
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Half} alt="star" />
                        <p className={styles.seven}>(5)</p>
                        </div>
                    </div>
                    <div>
                        <img src={Lamp} alt="lamp" />
                        <p className={styles.work}>Led work lamp</p>
                        <h3 className={styles.Rs}>Rs.<span className={styles.rate}>1,290 </span></h3>
                        <div className={styles.starts}>
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Half} alt="star" />
                        <p className={styles.seven}>(5)</p>
                        </div>
                    </div>
                    <div>
                        <img src={Lamp} alt="lamp"  /> 
                        <p className={styles.work}>Led work lamp</p>
                        <h3 className={styles.Rs}>Rs.<span className={styles.rate}>1,290 </span></h3>
                        <div className={styles.starts}>
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Half} alt="star" />
                        <p className={styles.seven}>(5)</p>
                        </div>
                    </div>
                    <div>
                        <img src={Lamp} alt="lamp" />
                        <p className={styles.work}>Led work lamp</p>
                        <h3 className={styles.Rs}>Rs.<span className={styles.rate}>1,290 </span></h3>
                        <div className={styles.starts}>
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Half} alt="star" />
                        <p className={styles.seven}>(5)</p>
                        </div>
                    </div>

                </div>
            </div>
            <Line1></Line1>
            {sidebar ? <Sidebar setSidebar={setSidebar} detail={detail}/> :
                <div className={styles.side}>
                    <div className={styles.sidedetails}>
                        <h2>{data.name}</h2>
                        <p className={styles.sideprice}>Rs. <span className={styles.bigprice}>{data.price}</span> </p>
                        <p className={styles.purp}>LED work lamp, white</p>
                        <p className={styles.tax}>Price incl. of all taxes</p>
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Half} alt="star" />
                        <p className={styles.seven}>({data.rating})</p>
                        <p className={styles.energy}>Energy information</p>
                        <p className={styles.check}>Elegible for delivery?</p>
                        <input type="text" placeholder="400001" />
                        <button className={styles.checkbtn}>Check</button>
                        <div className={styles.stock}>
                            <img src={Stock} alt="stock" />
                            <p>37 Available in stock</p>
                        </div>
                        <button className={styles.add} onClick={()=>change(id)}>
                            <span >
                                <img src={Love} alt="love" />
                            </span>
                            <span className={styles.love}>Add to shopping cart</span>
                        </button>
                        <div className={styles.travel}>
                            <img src={Storecheck} alt="check" />
                            <p className={styles.in}>Check in-store stock</p>
                        </div>
                    </div>
                </div>
            }
            <Footer />
        </>
    )
}

export { ProductDetail }