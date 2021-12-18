import './hamburger.css';
import cancel from './cancel.svg';
import ikealogo from './ikealogo.svg';
import changecountry from './changecountry.svg';
export const Hamburgermenu =({setFlag}) => {

    return(
        <>
            <div id="hamburgsu">
                <div id="hamburgersuf1">
                    <img id="cancelhamsuall" onClick={() => {
                        setFlag(false);
                    }} src={cancel} alt="" />
                    <img id="hamburgnthikesu"src={ikealogo} alt="" />
                </div>
                {/* 2nd */}
                <div id="hamburgprodsu">
                    <div className="hamburgtopsu">Products</div>
                    <div className='hamburgtopsu' >Rooms</div>
                    <div className="hamburgtopsu">New at IKEA</div>
                    <div className="hamburgtopsu">All offers</div>
                </div>
                {/* 2nd lower */}
                <div id="hamburgthierdsu">
                        <div className="hamburgtopsu">Ideas</div>
                        <div className="hamburgtopsu">Currently at IKEA</div>
                        <div className="hamburgtopsu">Track Your Order</div>
                </div>
                {/* 3rd lower */}
                <div id="hamburgfrthsu">
                        <div className="hamburgtopsudiff">IKEA Family</div>
                        <div className="hamburgtopsudiff">IKEA Business</div>
                        <div className="hamburgtopsudiff">Store</div>
                        <div className="hamburgtopsudiff">IKEA Restaurant</div>
                        <div className="hamburgtopsudiff">Shop by Series</div>
                        <div className="hamburgtopsudiff">Customer service</div>
                        <div className="hamburgtopsudiff">Design your room</div>
                        <div className="hamburgtopsudiff">My Profile</div>
                </div>
                {/* 4th lower */}
                <div id="hamburglogocontsu">
                    <img src={changecountry} alt="" />
                </div>
            </div>
        </>
    )
}