import styles from "./search.module.css"
import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import Heart from "../images/Heart.png"
import Star from "./images/Star.png"
import { NavLink } from "react-router-dom";
/* const Datadiv = styled.div`
    display: flex;
    margin-left:60px;
`

const Data = styled.div`
    margin-top:50px;
    margin-right: 80px;
` */

const ProductData = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {

        const data1 = await axios.get('https://ikeaa-clone.herokuapp.com/get/products/lamp')


        setData(data1.data.data)
    }

    return (
        <>{/* 
                {data.slice(2).map((e) => (
                    <>
                        {e.status ? <>
                            <img className={styles.heart} src={Heart} alt="love" />
                            <img onMouseEnter={() => handlehover(e._id)} src={e.status ? e.image3 : e.image} onMouseLeave={() => handlehover(e._id)} alt="image" width="250px" height="250px" />
                        </> : <> <img onMouseEnter={() => handlehover(e._id)} src={e.status ? e.image3 : e.image} onMouseLeave={() => handlehover(e._id)} alt="image" width="250px" height="250px" /></>
                        }
                        </>
                ))}
                {data.splice(0, 2).map((e) => (
                    <>
                        {e.status ? <>
                            <img className={styles.heart} src={Heart} alt="love" />
                            <img onMouseEnter={() => handlehover(e._id)} src={e.status ? e.image3 : e.image} onMouseLeave={() => handlehover(e._id)} alt="image" width="250px" height="250px" />
                        </> : <> <img onMouseEnter={() => handlehover(e._id)} src={e.status ? e.image3 : e.image} onMouseLeave={() => handlehover(e._id)} alt="image" width="250px" height="250px" /></>
                     }
                     </>
                ))} */}
                <div className={styles.use}> 
                     {data.map((e) => ( 
                         <div key={e._id} className={styles.data}>
                         <NavLink to = {`/product/${e._id}`} className={styles.links}>
                            <img src= {e.image}  alt="image" width="250px" height="250px" />
                            <p className={styles.nam}>{e.name}</p>
                            <p>Led Work lamp</p>
                            <p className={styles.rs}>Rs. <span className={styles.pri}>{e.price}.00</span> </p>
                            <img src={Star} alt="star" />
                            <img src={Star} alt="star" />
                            <img src={Star} alt="star" /> 
                            <div style={{marginTop:"40px"}}></div>
                            </NavLink>
                             </div>
                    ))} 
                 </div>  
        </>
    )
}

export { ProductData }