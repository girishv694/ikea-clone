import './ikeafamily.css';
import stars from './stars.svg';
import halfstars from './halfstars.svg';
import viewall from './viewall.svg'
export const Ikeafamily =() => {


    return(
        <>  
            <div id="ikeafamsu"><h2>Top IKEA Family offers</h2></div>
            <div id="ikeafamboxsu">
                <div>
                    <div id="famousimg1"></div>
                    <div id="famousimgcontsu">
                        <div className="famousimcontitlesu">IKEA Family price</div>
                        <div className="famousimsubtitsu">RABBLA</div>
                        <div className="famousinsubsubsu">Box with lid, 25x35x20 cm(9 3/4x13<br/>3/4x7 3/4)</div>
                        <div className="famousimsubsubsu">Normal Price Rs.999</div>
                        <div className="famouswid4pxsu"><span className="famousimpriceesu">Rs.</span><span className="famousimamntesu">1490</span></div>
                        <div className="famstarssu famouswid4pxsu">
                            <img src={stars} alt="" />
                            <img src={stars} alt="" />
                            <img src={stars} alt="" />
                            <img src={stars} alt="" />
                            <img src={halfstars} alt="" />
                            <div>&nbsp;&nbsp;&nbsp;&nbsp;(5)</div>
                        </div>
                    </div>
                </div>
                {/* 2nd */}
                <div className="fam24pixsu">
                    <div id="famousimg2"></div>
                    <div id="famousimgcontsu">
                        <div className="famousimcontitlesu">IKEA Family price</div>
                        <div className="famousimsubtitsu">STOENSE</div>
                        <div className="famousinsubsubsu">Box with lid, 25x35x20 cm(9 3/4x13<br/>3/4x7 3/4)</div>
                        <div className="famousimsubsubsu">Normal Price Rs.999</div>
                        <div className="famouswid4pxsu"><span className="famousimpriceesu">Rs.</span><span className="famousimamntesu">1490</span></div>
                        <div className="famstarssu famouswid4pxsu">
                            <img src={stars} alt="" />
                            <img src={stars} alt="" />
                            <img src={stars} alt="" />
                            <img src={stars} alt="" />
                            <img src={halfstars} alt="" />
                            <div>&nbsp;&nbsp;&nbsp;&nbsp;(5)</div>
                        </div>
                    </div>
                </div>
                {/* 3rd */}
                <div className="fam24pixsu">
                    <div id="famousimg3"></div>
                    <div id="famousimgcontsu">
                        <div className="famousimcontitlesu">IKEA Family price</div>
                        <div className="famousimsubtitsu">EKRAR</div>
                        <div className="famousinsubsubsu">Box with lid, 25x35x20 cm(9 3/4x13<br/>3/4x7 3/4)</div>
                        <div className="famousimsubsubsu">Normal Price Rs.999</div>
                        <div className="famouswid4pxsu"><span className="famousimpriceesu">Rs.</span><span className="famousimamntesu">1490</span></div>
                        <div className="famstarssu famouswid4pxsu">
                            <img src={stars} alt="" />
                            <img src={stars} alt="" />
                            <img src={stars} alt="" />
                            <img src={stars} alt="" />
                            <img src={halfstars} alt="" />
                            <div>&nbsp;&nbsp;&nbsp;&nbsp;(5)</div>
                        </div>
                    </div>
                </div>
                {/* 4th */}
                <div className="fam24pixsu">
                    <div id="famousimg4"></div>
                    <div id="famousimgcontsu">
                        <div className="famousimcontitlesu">IKEA Family price</div>
                        <div className="famousimsubtitsu">MELLTORP/JANINGE</div>
                        <div className="famousinsubsubsu">Box with lid, 25x35x20 cm(9 3/4x13<br/>3/4x7 3/4)</div>
                        <div className="famousimsubsubsu">Normal Price Rs.999</div>
                        <div className="famouswid4pxsu"><span className="famousimpriceesu">Rs.</span><span className="famousimamntesu">1490</span></div>
                        <div className="famstarssu famouswid4pxsu">
                            <img src={stars} alt="" />
                            <img src={stars} alt="" />
                            <img src={stars} alt="" />
                            <img src={stars} alt="" />
                            <img src={halfstars} alt="" />
                            <div>&nbsp;&nbsp;&nbsp;&nbsp;(5)</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="defmargsu margfamsu40">
                <img src={viewall} alt="" />
            </div>
        </>
    )
}