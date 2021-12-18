import './betterlive.css';
import learnmore from './learnmore.svg';
export const Betterlive =() => {

    return(
        <>
        <div id="betterlivesu">
            <div className="betterlivetitlesu">IKEA Better Living Challenge 2021</div>
            <div id="betterliveimgssu">
                <div><img src="images/betterlive1.png" alt="" /></div>
                <div className="betterliveboxmargsu">
                    <div className="betterlivesubsu">At IKEA we are passionate about the planet and climate change.That's why we're inviting our <br/> IKEA Family members to take part in this challange and stand a chance to win IKEA vouchers worth Rs. 1500! T&C apply</div>
                    <div id="learnbtnsu"><img src={learnmore} alt="" /></div>
                </div>
               
            </div>
        </div>
        </>
    )
}