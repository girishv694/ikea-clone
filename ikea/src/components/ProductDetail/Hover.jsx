import { useEffect, useState } from "react"
import axios from "axios"
import styles from "./product.module.css"
import Star from "./images/Star.png"

const Hover = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {

        const data1 = await axios.get('http://localhost:3001/get/products/lamp')

        setData(data1.data.data)
    }


    return (
            <>
            {data.map((e) => (
                <div key={e._id} className={styles.data}>
                    <img src={e.image2} alt="image2" width="300px" />
                    <p className={styles.nam}>{e.name}</p>
                    <p>Led Work lamp</p>
                    <p className={styles.rs}>Rs. <span className={styles.pri}>{e.price}.00</span> </p>
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <div style={{marginTop:"40px"}}></div>
                </div>
            ))}
        </>
    )
}

export {Hover}