
import './ideas.css';
import load12 from './load12.svg';
export const Ideas =() => {

    return(
        <>
            <div id="ideasmainsu">
                <div id="ideastitlsu">More ideas and inspirations</div>
                {/* buttons */}
                <div id="ideasbtnssu">
                    <button className="idebtnsssu">Bedroom</button>
                    <button className="idebtnsssu margleftideas8">Living Room</button>
                    <button className="idebtnsssu margleftideas8">Kitchen</button>
                    <button className="idebtnsssu margleftideas8">Workspace</button>
                    <button className="idebtnsssu margleftideas8">Outdoor</button>
                    <button className="idebtnsssu margleftideas8">Bathroom</button>
                    <button className="idebtnsssu margleftideas8">Baby & children room</button>
                    <button className="idebtnsssu margleftideas8">Dining</button>
                    <button className="idebtnsssu margleftideas8">Hallway</button>
                    <button className="idebtnsssu margleftideas8">Accessories</button>
                </div>
                {/* 3rd div for images */}
                <div id="ideimgsnsssu">
                        <div>
                            <img  src="images/idea1.png" alt="" />
                            <img className="midimagesu24" src="images/idea2.png" alt="" />
                            <img className="midimagesu24" src="images/idea3.png" alt="" />
                            <img className="midimagesu24" src="images/idea4.png" alt="" />
                        </div>
                        {/* 2nd */}
                        <div>
                            <img src="images/idea5.png" alt="" />
                            <img className="midimagesu24" src="images/idea6.png" alt="" />
                            <img className="midimagesu24" src="images/idea7.png" alt="" />
                            <img className="midimagesu24" src="images/idea8.png" alt="" />
                        </div>
                        <div>
                            <img src="images/idea9.png" alt="" />
                            <img className="midimagesu24" src="images/idea10.png" alt="" />
                            <img className="midimagesu24" src="images/idea11.png" alt="" />
                            <img className="midimagesu24" src="images/idea12.png" alt="" />
                        </div>
                </div>
                <div id="ideasloader12su"><img src={load12} alt="" /></div>
            </div>
        </>
    )
}