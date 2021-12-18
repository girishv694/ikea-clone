
import './topcategory.css';

export const Topcategory =() => {

    return(
        <>
          <div id="tocategsu"><h2>Top Categories</h2></div>
        <div id="topcategorysu">
            {/* images inside div */}
            <div id="topcategimagessu">
                <div id="topcat1su" >
                        <button className="catbtnsu">Sofas & armchairs</button>
                </div>
                <div id="topcat2su" className="festiveleftmargsu">
                        <button className="catbtnsuoth">Kitchenware &<br/>tableware</button>
                </div>
                <div id="topcat3su" className="festiveleftmargsu">
                        <button className="catbtnsu">Cushion covers</button>
                </div>
                <div id="topcat4su" className="festiveleftmargsu">
                        <button className="catbtnsu">Lighting</button>
                </div>
                <div id="topcat5su" className="festiveleftmargsu">
                        <button className="catbtnsu">Decoration</button>
                </div>
                
            </div>
            <div style={{minHeight:"38px"}}></div>
        </div>
        {/* 2nd categories */}
        <div id="tocategsu"></div>
        <div id="topcategorysu">
            {/* images inside div */}
            <div id="topcategimagessu">
                <div id="topcat6su" >
                        <button className="catbtnsu">Beds</button>
                </div>
                <div id="topcat7su" className="festiveleftmargsu">
                        <button className="catbtnsu">Chairs</button>
                </div>
                <div id="topcat8su" className="festiveleftmargsu">
                        <button className="catbtnsu">Study tables</button>
                </div>
                <div id="topcat9su" className="festiveleftmargsu">
                        <button className="catbtnsu">Baby & children</button>
                </div>
                <div id="topcat10su" className="festiveleftmargsu">
                        <button className="catbtnsuoth">Small storage &<br/>organisers</button>
                </div>
                
            </div>
            <div style={{minHeight:"38px"}}></div>
        </div>
        </>
    )
}