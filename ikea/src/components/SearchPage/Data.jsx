import styles from "./search.module.css"
import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import Heart from "../images/Heart.png"

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

        const data1 = await axios.get('http://localhost:3001/get/products/lamp')

        setData(data1.data.data)
    }

    const handlehover = (id) => {
        /*  console.log(id); */
        const updated = data.map((e) => {
            if (e._id === id) {
                e.status = !e.status
            }
            return e
        })
        setData(updated)
    }

    return (
        <>
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
                ))}
        </>
    )
}

export { ProductData }