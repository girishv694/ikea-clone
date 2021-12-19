import '../componentsCss/PaymentmainComponent.css';
import { Navbar2 } from '../Deliveryinformation/DeliveryCompo/Navbar2/Navbar2';
import NavElement from './NavElement';
import Payment from './Payment';

function PaymentComponent(){
     return(
         <div className='PaymentComponent'>
             <header>
                 <Navbar2 />
                 
                  <Payment></Payment>
             </header>
         </div>
     )
}
export default PaymentComponent