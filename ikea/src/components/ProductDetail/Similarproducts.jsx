import { useEffect, useState } from "react"
import styles from "./product.module.css"
import axios from "axios"
import Star from "./images/Star.png"
import Heart from "./images/Heart.png"

const Similarproducts = () =>{
    const [data, setData] = useState([])
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {

        const data1 = await axios.get('http://localhost:3001/get/products/lamp')

        setData(data1.data.data)
    }

       const handlehover = (id) => {
         const updated = data.map((e) => {
            if (e._id === id) {
                e.status = !e.status
            }
            return e
        })
        setData(updated)
    }  


    return (
        <div className={styles.use}>
                     {data.map((e) => ( 
                         <div key={e._id} className={styles.data}>
                            {e.status ? <>
                                <img className={styles.heart} src={Heart} alt="love" />
                                <img onMouseEnter={() => handlehover(e._id)} src={e.status ? e.image2 : e.image} onMouseLeave={() => handlehover(e._id)} alt="image" width="250px" height="250px" />
                            </> : <> <img onMouseEnter={() => handlehover(e._id)} src={e.status ? e.image2 : e.image} onMouseLeave={() => handlehover(e._id)} alt="image" width="250px" height="250px" /></>
                            }
                            <p className={styles.nam}>{e.name}</p>
                            <p>Led Work lamp</p>
                            <p className={styles.rs}>Rs. <span className={styles.pri}>{e.price}.00</span> </p>
                            <img src={Star} alt="star" />
                            <img src={Star} alt="star" />
                            <img src={Star} alt="star" /> 
                            <div style={{marginTop:"40px"}}></div>
                             </div>
                    ))} 
                 </div>  
    )
}

export {Similarproducts}