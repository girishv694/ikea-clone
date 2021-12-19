
import PaymentType from "./PaymentType"

import '../componentsCss/PaymentBox.css'
import adress1 from './images/cards.png'
import adress2 from './images/emi.png'
import adress3 from './images/upi.png'
import adress4 from './images/netbanking.png'
import adress5 from './images/wallet.png'

function PaymentBox  () {
    return (
        <div>
            <div className="PaymentBoxb">

             <div className="PaymentBoxd1">
              <PaymentType name = {adress1} />
              </div>
              <div>
               <PaymentType name = {adress2} />
               </div>

               <div>
                <PaymentType name = {adress3}/>
                </div>

                   <div>
                     <PaymentType name = {adress4}/>
                  </div>

                   <div>
                     <PaymentType name = {adress5}/>
                  </div>
            </div>
        </div>
    )
}

export default PaymentBox;