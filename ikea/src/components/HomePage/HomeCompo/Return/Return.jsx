
import './return.css';
import heart from './heart.svg';
import mi from './mi.svg'
import tools from './tools.svg'
import m from './m.svg'
export const Return =() => {


    return(
        <>
            <div id="returnsu">
                <div>
                    <div><img src={heart} alt="" /></div>
                    <div className="returnpolisu">Return policy</div>
                    <div className="retsubduosu">Expectations during COVID19</div>
                    <div className="retsubduosu textretsu">Learn More</div>
                </div>
                {/* 2nd */}
                <div>
                    <div><img src={mi} alt="" /></div>
                    <div className="returnpolisu">Click & collect</div>
                    <div className="retsubduosu">Safe click and collect shopping at<br/> IKEA Stores!</div>
                    <div className="retsubduosu textretsu">Learn More</div>
                </div>
                {/* 3rd */}
                <div>
                    <div><img src={tools} alt="" /></div>
                    <div className="returnpolisu">Planning tools</div>
                    <div className="retsubduosu">Our planning tools will help you<br/> give shape to your ideas</div>
                    <div className="retsubduosu textretsu">Learn More</div>
                </div>
                {/* 4th */}
                <div>
                    <div><img src={m} alt="" /></div>
                    <div className="returnpolisu">Safety at IKEA store</div>
                    <div className="retsubduosu">Safe shopping experience at IKEA</div>
                    <div className="retsubduosu textretsu">Learn More</div>
                </div>
            </div>
        </>
    )
}