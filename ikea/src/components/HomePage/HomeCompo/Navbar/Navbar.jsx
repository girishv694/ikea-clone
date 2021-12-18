import vector from './vector.svg';
import './navbar.css';
import ikealogo from './ikealogo.svg';
import magnifier from './magnifier.svg';
import camera from './camera.svg';
import truck from './truck.svg';
import user from './user.svg';
import shoppingcart from './shoppingcart.svg';
import {Hamburgermenu} from './Hamburgermenu';
import {useState} from 'react';
import { useHistory  } from 'react-router-dom';

export const Navbar =() => {
    const history = useHistory();
    const [flag,setFlag] = useState(false);
    const [search,setSearch] = useState("");
    const handleSearch =() => {
        history.push(`/search/${search}`);
        setSearch("")
    }
    return(
        <>
        {flag?<Hamburgermenu setFlag={setFlag}/>:""}
        <div>
            <div id="navbarsu" >
                <div id="vectornavsu"> <img  onClick={() =>{
                    setFlag(true);
                }}src={vector} alt="vector" /> </div>
                <div id="ikealogosu"> <img src={ikealogo} alt="logo" /> </div>
                <div id="catnavsu">
                    <a className="navancsu" href=".">Products</a>
                    <a className="navancsu" href=".">Rooms</a>
                    <a className="navancsu" href=".">New at IKEA</a>
                    <a className="navancsu" href=".">All Offers</a>
                </div>
                {/* ends here */}
                <div id="searchnavsu">
                    <img id="magnifier" alt="magnifier" src={magnifier} />
                    <input id="searchinpsu" value={search} onKeyPress={(e) => e.key === 'Enter' && handleSearch()} onChange={(e) => {setSearch(e.target.value)}} type="text" placeholder='What are you looking for ?'/>
                    <img id="camerasu" src={camera} alt="camera" />
                </div>
                <div id="trucknavsu"> <img src={truck} alt="truck" /> </div>
                <div id="usernavsu"> <img src={user} alt="user" /> 
                </div>
                <div id="usernavsu"><img src={shoppingcart} alt="shoppingcart" /></div>
            </div>
        </div>
        
        </>
    )
}