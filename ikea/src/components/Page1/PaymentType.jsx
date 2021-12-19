import '../componentsCss/PaymentType.css';

function PaymentType(props) {

    return (
        <div className="PaymentTypea">
            <img className="PaymentTypeb" src = {props.name}></img>
        </div>
    )
}


export default PaymentType;