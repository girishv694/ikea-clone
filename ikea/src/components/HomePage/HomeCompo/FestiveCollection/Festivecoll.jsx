import './festivecoll.css';

export const Festivecoll =() => {

    return(
        <>
        <div id="festivesu">
            <div id="festivetitlesu">
                <h2>Limited festive collections</h2>
            </div>
            <div id="festivegridsu">
                {/* 1st grid */}
                    <div >
                        <div className="festiveFirstsu"><h2>VINTER</h2></div>
                        <div className="festiveSecondsu">Are you longing for an unusually merry Christmas?We do <br/> that too. Prepare at home with decorations from our special holiday collection.</div>
                        <div className="festiveThirdsu">
                            <img src="images/festive1.png" alt="" />
                        </div>
                    </div>
                {/* 2nd grid */}
                <div className="festiveleftmargsu" >
                        <div className="festiveFirstsu"><h2>AROMATISK</h2></div>
                        <div className="festiveSecondsu">Are you longing for an unusually merry Christmas?We do <br/> that too. Prepare at home with decorations from our special holiday collection.</div>
                        <div className="festiveThirdsu">
                            <img src="images/festive2.png" alt="" />
                        </div>
                    </div>
                {/* 3rd grid */}
                <div className="festiveleftmargsu" >
                        <div className="festiveFirstsu"><h2>KARISMATISK</h2></div>
                        <div className="festiveSecondsu">Are you longing for an unusually merry Christmas?We do <br/> that too. Prepare at home with decorations from our special holiday collection.</div>
                        <div className="festiveThirdsu">
                            <img src="images/festive3.png" alt="" />
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}