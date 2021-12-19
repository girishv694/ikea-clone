import Empty from "./images/Empty.png"
import styles from "./cart.module.css"
import Card from "./images/Card.png"
import { NavLink } from "react-router-dom";

const CartDetails = () => {
    return (
        <>
        <div className={styles.empty}>
            <div className={styles.imgem}>
                <img src={Empty} alt="empty" width="400px" />
            </div>
            <p className={styles.ce}>Your cart is empty! <br />
                Login to see what you already added</p>
            <p className={styles.ca}>Create account</p>    
        </div>
        <div className={styles.buttons}>
      <NavLink to="/products"><button className={styles.bop}>Browser our product</button></NavLink>
      <NavLink to="/login"> <button className={styles.login}>Login</button></NavLink> 
        </div>
        {/* <img className={styles.cardimg} src={Card} alt="blue" /> */}
        </>
    )
}

export { CartDetails }