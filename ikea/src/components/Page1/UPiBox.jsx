import UpiType from "./UpiType"

import '../componentsCss/UpiBox.css'
import adress1 from './images/amazonpay.png'
import adress2 from './images/bhim.png'
import adress3 from './images/gpay.png'
import adress4 from  './images/paytm.png'
import adress5 from './images/phonepay.png'
import adress6 from './images/others.png'


function UpiBox  () {
    return (
        <div className="UpiBoxa">
            <div className="UpiBoxb">

             <div className="UpiBoxd1">
                  <UpiType name = {adress1} />
              </div>

              <div>
                  <UpiType name = {adress2} />
               </div>

               <div>
                   <UpiType name = {adress3}/>
                </div>

                   <div>
                       <UpiType name = {adress4}/>
                  </div>

                  
            </div>

            <div className="UpiBoxc">
             
             <div className="UpiBoxd1">
                  <UpiType name = {adress5} />
              </div>
              <div className="UpiBoxd1">
                  <UpiType name = {adress6} />
              </div>
                 

            </div>

        </div>
    )
}

export default UpiBox;