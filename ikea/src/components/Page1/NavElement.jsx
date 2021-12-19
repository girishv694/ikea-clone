//import img1 from './images/ikea.png';
import '../componentsCss/NavElement.css';
import location from "./images/ikea.png"

 export default function NavElement () {

    return (
        <div className="Shmaindiv">
            <div className='a'>
                <div className='b'>
                   <img src={location}/>
                 </div>

            </div>

               

         
        </div>
    )
}