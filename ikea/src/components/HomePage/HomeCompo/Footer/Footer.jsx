
import './footer.css';
import facebook from './facebook.svg';
import instagram from './instagram.svg';
import twitter from './twitter.svg';
import youtube from './youtube.svg';
import changecountry from './changecountry.svg';
import footercopyright from './footercopyright.svg';
export const Footer =() => {

    return(
        <>
        <div id="footermainsu">
                <div>
                    <div className="footerhedsu">Join IKEA Family</div>
                    <div className="footersubhedsu">Get exclusive offers, inspiration, and lots more to help bring your ideas to life. All for free.</div>
                    <div className="footersubhedsu">
                        <button className="joinushomesu">join us</button>
                    </div>
                </div>
                {/* 2nd */}
                <div>
                    <div className="footerhedsu">IKEA Family</div>
                    <div className="footersubhedsu">Log in</div>
                    <div className="footersubhedsu">Join IKEA Family</div>
                    <div className="footersubhedsu">Member offers</div>
                    <div className="footersubhedsu">Workshop & Events</div>
                </div>
                {/* 3rd */}
                <div>
                    <div className="footerhedsu">IKEA Family</div>
                    <div className="footersubhedsu">Design your room</div>
                    <div className="footersubhedsu">Deliver Service</div>
                    <div className="footersubhedsu">Installation Service</div>
                    <div className="footersubhedsu">Assembly Service</div>
                    <div className="footersubhedsu">Kitchen Planning</div>
                    <div className="footersubhedsu">Measuring Service</div>
                    <div className="footersubhedsu">Customer Service</div>
                    <div className="footersubhedsu">Recycle Program</div>
                    <div className="footersubhedsu">Track your Order</div>
                </div>
                {/* 4th */}
                <div>
                    <div className="footerhedsu">Help</div>
                    <div className="footersubhedsu">How to shop</div>
                    <div className="footersubhedsu">Return policy</div>
                    <div className="footersubhedsu">Prices and price tags</div>
                    <div className="footersubhedsu">Contact us</div>
                    <div className="footersubhedsu">FAQ's</div>
                    <div className="footersubhedsu">Planners</div>
                    <div className="footersubhedsu">Size guide - Beds & mattresses</div>
                    <div className="footersubhedsu">Buying guides</div>
                    <div className="footersubhedsu">Gift Card</div>
                    <div className="footersubhedsu">Feedback</div>
                </div>
                {/* 5th */}
                <div>
                    <div className="footerhedsu">About IKEA</div>
                    <div className="footersubhedsu">This is IKEA</div>
                    <div className="footersubhedsu">Working at IKEA</div>
                    <div className="footersubhedsu">Newsroom</div>
                    <div className="footersubhedsu">Sustainability</div>
                    <div className="footersubhedsu">IKEA Stores</div>
                    <div className="footersubhedsu">IKEA Restaurants</div>
                    <div className="footersubhedsu">IKEA for Business</div>
                </div>
        </div>
        <div id="footermainsu2">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={youtube} alt="" />
            <img id="chngcntryhmsu" src={changecountry} alt="" />
        </div>
        <div id="footercopysu">
            <img src={footercopyright} alt="" />
        </div>
        </>
    )
};