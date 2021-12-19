import '../componentsCss/PaymentmainComponent.css';
import NavElement from './NavElement';
import Payment from './Payment';

function PaymentComponent(){
     return(
         <div className='PaymentComponent'>
             <header>
                 <NavElement></NavElement>
                 <div className='pricediv'></div>
                  <Payment></Payment>
             </header>
         </div>
     )
}
export default PaymentComponent