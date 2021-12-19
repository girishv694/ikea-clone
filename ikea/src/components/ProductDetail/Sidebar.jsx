import styles from "./sidebar.module.css"
import Cancel from "./images/Cancel.png"
import axios from "axios"
import Star from "./images/Star.png"
import Half from "./images/Half.png"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";

const Sidebar = ({setSidebar,detail}) => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data1 = await axios.get("http://localhost:3001/get/products/lamp")
        
        setData(data1.data.data)
    }

    const hanldecancel = () => {
        setSidebar(false)
    }


    return (
        <div className={styles.sidebar}>
            <div className={styles.box}>
                <button onClick={hanldecancel} className={styles.cancel}>
                    <img src={Cancel} alt="cancel" />
                </button>
                <h2 className={styles.heading}>{detail} was added to your shopping bag</h2>
               <NavLink to="/cart"><button className={styles.bag}>Continue to bag</button></NavLink> 
            </div>
            <div className={styles.related}>
                <h2>Related products</h2>
                <div className={styles.uses}>
                    {data.map((e) => (
                        <div key={e._id} className={styles.ledata}>
                            <img className={styles.im} src={e.image1} alt="image" width="200px" />
                            <div className={styles.app}>
                            <p className={styles.name}>{e.name}</p>
                            <p>Led Work lamp</p>
                            <p className={styles.rs}>Rs. <span className={styles.pri}>{e.price}.00</span> </p>
                            <img src={Star} alt="star" />
                            <img src={Star} alt="star" />
                            <img src={Star} alt="star" />
                            <img src={Star} alt="star" />
                            <img src={Half} alt="star" />
                            <p className={styles.rating}>({e.rating})</p>
                            </div>
                        </div>                           
                    ))}
                </div>
            </div>
        </div>
    )
}

export { Sidebar }