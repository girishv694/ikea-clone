import './navbar2.css';
import ikealogo from './ikealogo.svg';
import {useState} from 'react';
import { NavLink } from 'react-router-dom';
export const Navbar2 =()=>{
    const [login,setLogin] = useState(true);
    return(
        <>
            <div id="navbar2su">
                    <NavLink to="/"> <img src={ikealogo} alt="" /> </NavLink>
                    {!login ?<button id="loggerbtnsu">Log in</button>:<div id="nav2altsu"><div>Reference No : 180356987</div><div id="navsu2amnt">Amount : 1689.00</div></div>}
            </div>
        </>
    )
}