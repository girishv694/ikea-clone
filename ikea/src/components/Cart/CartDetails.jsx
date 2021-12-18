import Empty from "./images/Empty.png"
import styles from "./cart.module.css"
import Card from "./images/Card.png"

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
        <button className={styles.bop}>Browser our product</button>
        <button className={styles.login}>Login</button>
        </div>
        {/* <img className={styles.cardimg} src={Card} alt="blue" /> */}
        </>
    )
}

export { CartDetails }