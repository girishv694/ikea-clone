import styled from "styled-components"
import Vector from "./images/Vector.png"
import Filter from "./images/Filter.png"
import Vectorup from "./images/Vectorup.png"
import Emojis from "./images/Emojis.png"
import Desk from "./images/Desk.png"
import Whitedesk from "./images/Whitedesk.png"
import Heart from "./images/Heart.png"
import Rightsmall from "./images/Rightsmall.png"
import styles from "./search.module.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { Similarproducts } from "../ProductDetail/Similarproducts"
import {Navbar} from "../HomePage/HomeCompo/Navbar/Navbar"
import {Footer} from "../HomePage/HomeCompo/Footer/Footer"
import { NavLink } from "react-router-dom";


const Div = styled.div`
position: absolute;
width: 734px;
height: 56px;
left: 84px;
top: 176px;
`
const Head = styled.h1`
 font-family: Noto Sans;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 58px;
 display: flex;
align-items: center;
text-align: center;
color: #000000; 
`
const Anchor = styled.h4`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
position: absolute;
text-decoration: underline;
width: 84px;
height: 22px;
left: 1150px;
top: 260px;
`
const Span1 = styled.span`
    margin-left: 20px;
    text-decoration: none;
`

const Div4 = styled.div`
    /* position: absolute; */
width: 1200px;
height: 552px;
left: 84px;
top: 400px;
`
const Datadiv = styled.div`
    display: flex;
    margin-left:60px;
`

const Data = styled.div`
    margin-top:50px;
    margin-right: 80px;
`

const Filters = styled.div`
/* display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;
position: static;
width: 162px;
height: 40px;
left: 736px;
margin-top: 120px;
border-radius: 24px;
flex: none;
order: 6;
flex-grow: 0;
margin: 0px 500px; */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
position: absolute;
width: 1151px;
height: 40px;
left: 100px;
top: 380px;
`

const Button = styled.button`
/* display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;
position: static; */
width: 91px;
height: 40px;
left: 0px;
top: 0px;
background: #F5F5F5;
border-radius: 24px;
border: none;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 16px;
cursor: pointer;
`
const Button1 = styled.button`
/* display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;
position: static; */
width: 96px;
height: 40px;
left: 107px;
top: 0px;
background: #F5F5F5;
border-radius: 24px;
cursor: pointer;
border: none;
flex: none;
order: 1;
flex-grow: 0;
margin: 0px 16px;
`
const Button2 = styled.button`
/* display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;

position: static; */
width: 105px;
height: 40px;
left: 219px;
top: 0px;
cursor: pointer;
border: none;

/* Neutral Colors/Frost */

background: #F5F5F5;
border-radius: 24px;

/* Inside Auto Layout */

flex: none;
order: 2;
flex-grow: 0;
margin: 0px 16px;
`
const Button3 = styled.button`
/* display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;

position: static; */
width: 120px;
height: 40px;
left: 340px;
top: 0px;
cursor: pointer;
border: none;
/* Neutral Colors/Frost */

background: #F5F5F5;
border-radius: 24px;

/* Inside Auto Layout */

flex: none;
order: 3;
flex-grow: 0;
margin: 0px 16px;
`
const Button4 = styled.button`
/* display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;

position: static; */
width: 116px;
height: 40px;
left: 476px;
top: 0px;
cursor: pointer;
border: none;
/* Neutral Colors/Frost */

background: #F5F5F5;
border-radius: 24px;

/* Inside Auto Layout */

flex: none;
order: 4;
flex-grow: 0;
margin: 0px 16px;
`
const Button5 = styled.button`
/* display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;

position: static; */
width: 112px;
height: 40px;
left: 608px;
top: 0px;
cursor: pointer;
border: none;
/* Neutral Colors/Frost */

background: #F5F5F5;
border-radius: 24px;
flex: none;
order: 5;
flex-grow: 0;
margin: 0px 16px;
`
const Button6 = styled.button`
/* display: flex;
flex-direction: row; */
justify-content: center;
align-items: center;
cursor: pointer;
border: none;

/* position: static;
 */
padding: 8px 16px;
width: 175px;
height: 40px;
left: 736px;
top: 0px;
background: #F5F5F5;
border-radius: 24px;
flex: none;
order: 6;
flex-grow: 0;
margin: 0px 16px;
`
const Button7 = styled.button`
/* display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;

position: static; */
width: 102px;
height: 40px;
left: 914px;
top: 0px;
cursor: pointer;
border: none;
background: #F5F5F5;
border-radius: 24px;
flex: none;
order: 7;
flex-grow: 0;
margin: 0px 16px;
`
const Button8 = styled.button`
/* display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;

position: static; */
width: 120px;
height: 40px;
left: 1032px;
top: 0px;
cursor: pointer;
border: none;
background: #DFDFDF;
border-radius: 24px;
flex: none;
order: 8;
flex-grow: 0;
margin: 0px 16px;
`

const Text = styled.h1`
position: static;
width: 25px;
height: 16px;
left: 16px;
top: 12px;
font-family: Noto Sans;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 16px;
margin-left: 10px;
display: flex;
align-items: center;
text-align: center;
color: #111111;
`
const Text1 = styled.h1`
position: static;
width: 30px;
height: 16px;
left: 16px;
top: 12px;
font-family: Noto Sans;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 16px;
margin-left: 10px;
display: flex;
align-items: center;
text-align: center;
color: #111111;
`

const Text2 = styled.h1`
position: static;
width: 39px;
height: 16px;
left: 16px;
top: 12px;
font-family: Noto Sans;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 16px;
margin-left: 10px;
display: flex;
align-items: center;
text-align: center;
color: #111111;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 10px;
`
const Text3 = styled.h1`
position: static;
width: 54px;
height: 16px;
left: 16px;
top: 12px;
font-family: Noto Sans;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 16px;
margin-left: 10px;
display: flex;
align-items: center;
text-align: center;
color: #111111;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 10px;
`
const Text4 = styled.h1`
position: static;
width: 50px;
height: 16px;
left: 16px;
top: 12px;
font-family: Noto Sans;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 16px;
margin-left: 10px;
display: flex;
align-items: center;
text-align: center;
color: #111111;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 10px;
`
const Text5 = styled.h1`
position: static;
width: 46px;
height: 16px;
left: 16px;
top: 12px;
font-family: Noto Sans;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 16px;
margin-left: 10px;
display: flex;
align-items: center;
text-align: center;
color: #111111;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 10px;
`
const Text6 = styled.h1`
/* position: static; */
width: 145px;
height: 16px;
left: 0px;
top: 12px;
font-family: Noto Sans;
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 16px;
display: flex;
align-items: center;
text-align: center;
color: #111111;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 10px;
`
const Text7 = styled.h1`
position: static;
width: 36px;
height: 16px;
left: 16px;
top: 12px;
font-family: Noto Sans;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 16px;
margin-left: 10px;
display: flex;
align-items: center;
text-align: center;
color: #111111;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 10px;
`
const Text8 = styled.h1`
position: static;
width: 100px;
height: 16px;
left: 16px;
top: 12px;
font-family: Noto Sans;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 16px;
display: flex; 
align-items: center;
text-align: center;
color: #111111;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 10px;
`
const Span = styled.span`
margin-left: 10px;
`

const Line = styled.hr`
/* position: relative; */
left: 0%;
right: 0%;
margin-left: 2%;
/* top: 0%; */
margin-top: 30%;
width: 109%;
border: 1px solid #DFDFDF;
`
const Line2 = styled.hr`
/* position: absolute; */
left: 5%;
right: 0%;
margin-left: 2%;
top: 0%;
margin-top: 40%;
width: 95%;
border: 1px solid #DFDFDF;
`
const Line3 = styled.hr`
/* position: absolute; */
left: 3%;
right: 0%;
top: 0%;
margin-top: 5%;
margin-left: -5%;
width: 112%;
border: 1px solid #DFDFDF;
`
const Para = styled.p`
font-family: Noto Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 22px;
/* display: flex; */
align-items: center;
text-align: center;
color: #484848;
`

const Div2 = styled.div`
position: absolute;
width: 1150px;
height: 224px;
left: 84px;
top: 1600px;
`

const Div3 = styled.div`
position: static;
width: 800px;
height: 36px;
left: 2px;
top: 2px;
font-family: Noto Sans;
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 36px;
display: flex;
align-items: center;
text-align: center;
color: #111111;
flex: none;
order: 0;
flex-grow: 1;
margin: 0px 300px;
`
const Icons = styled.div`
position: static;
width: 704px;
height: 40px;
left: calc(50% - 704px/2);
top: calc(50% - 40px/2 + 32px);
font-family: Noto Sans;
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 36px;
display: flex;
align-items: center;
text-align: center;
color: #000000;
flex: none;
order: 1;
flex-grow: 0;
margin: 24px 500px;
`
const Imgdiv = styled.div`
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
`
const Imgdiv1 = styled.div`
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
margin-left: 20%;
`
const Imgdiv2 = styled.div`
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
margin-left: 40%;
`
const Imgdiv3 = styled.div`
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
margin-left: 60%;
`
const Imgdiv4 = styled.div`
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
margin-left: 80%;
`
const Imgdiv5 = styled.div`
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
margin-left: 100%;
`

const Textdiv = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 16px;
position: static;
width: 184px;
height: 222px;
left: calc(50% - 184px/2);
top: 258px;
background: #F5F5F5;
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin: 0px 0px;
`


const Divpara = styled.p`
position: static;
width: 184px;
height: 20px;
left: calc(50% - 184px/2);
top: calc(50% - 20px/2);
font-family: Noto Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
display: flex;
align-items: center;
color: #484848;
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
margin: 0px 0px;
`
const Similar = styled.h4`
position: static;
width: 184px;
height: 78px;
left: calc(50% - 184px/2);
top: calc(50% - 78px/2 - 24px);
font-family: Noto Sans;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 26px;
color: #111111;
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
margin: 10px 0px;
`
const Ecp = styled.div`
/* position: absolute; */
left: 1%;
right: 0%;
top: 85%;
margin-top: 50px;
bottom: 0%;
`

const Div5 = styled.div`
position: absolute;
width: 1100px;
height: 520px;
left: 84px;
top: 1904px;
`
const Div7 = styled.div`
position: absolute;
width: 1150px;
height: 94px;
left: 84px;
top: 3106px;
`
const Text10 = styled.h3`
position: static;
width: 264px;
height: 36px;
left: 0px;
top: 2px;
font-family: Noto Sans;
font-style: normal;
font-weight: 600;
font-size: 25px;
line-height: 36px;
display: flex;
align-items: center;
color: #000000;
flex: none;
order: 0;
flex-grow: 1;
margin: 0px 0px;
`
const Others = styled.h4`
position: static;
height: 22px;
left: 0px;
top: 0px;
font-family: Noto Sans;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
display: flex;
align-items: center;
text-decoration-line: underline;
color: #000000;
flex: none;
order: 0;
flex-grow: 0;
margin: 80px 2px;
`

const One = styled.span`
    width:125px;
`
const Five = styled.span`
    width:90px;
`
const Six = styled.span`
    width:135px;
`
const Seven = styled.span`
    width:120px;
`
const Eight = styled.span`
    width:95px;
`
const Nine = styled.span`
    width:150px;
`

const Text9 = styled.h3`
position: static;
width: 192px;
height: 36px;
left: 0px;
top: -22px;
font-family: Noto Sans;
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 36px;
display: flex;
align-items: center;
color: #000000;
flex: none;
order: 0;
flex-grow: 1;
margin: 0px 0px;
`

const SearchResults = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {

        const data1 = await axios.get('http://localhost:3001/get/products/lamp')

        setData(data1.data.data)
    }

    
    
    return (
        <>
        <Navbar />
            <Div>
                <Head>Showing results for <span><h3>"table lamps for study"</h3></span></Head>
            </Div>
            <Anchor>
                Products(10)<Span1> Content(25)</Span1>
            </Anchor>
            <Filters>
                <Button ><Text>Sort<Span><img src={Vector} /></Span></Text></Button>
                <Button1 ><Text1>Price<Span><img src={Vector} /></Span></Text1></Button1>
                <Button2 ><Text2>Color<Span><img src={Vector} /></Span></Text2></Button2>
                <Button3 ><Text3>Category<Span><img src={Vector} /></Span></Text3></Button3>
                <Button4 ><Text4>Material<Span><img src={Vector} /></Span></Text4></Button4>
                <Button5 ><Text5>Feature <Span><img src={Vector} /></Span></Text5></Button5>
                <Button6 ><Text6>Customer Rating <Span><img src={Vector} /></Span></Text6></Button6>
                <Button7 ><Text7>Series <Span><img src={Vector} /></Span></Text7></Button7>
                <Button8><Text8>All Filter<Span><img src={Filter} /></Span></Text8></Button8>
            </Filters>

            <Div4>
                <Line></Line>
                <Datadiv>
                    {data.slice(2).map((e) => (
                        <Data key={e._id}>
                            <NavLink to = {`/product/${e._id}`} className={styles.links}>
                           <img src={e.image}  alt="image" width="250px" height="250px" />
                            
                            <h4 className={styles.names}>{e.name}</h4>
                            <p className={styles.worklamp}>Led work lamp</p>
                            <p className={styles.rs}>Rs. <span className={styles.pri}>{e.price}.00</span> </p>
                        </NavLink>
                        </Data>
                    ))}
                </Datadiv>
                <Datadiv>
                    {data.splice(0, 2).map((e) => (
                        <div key={e._id} className={styles.datadiv}>
                            <NavLink to = {`/product/${e._id}`} className={styles.links}>
                            <img  src={e.image}  alt="image" width="250px" height="250px" />
                            
                            <h4 className={styles.names}>{e.name}</h4>
                            <p className={styles.worklamp}>Led work lamp</p>
                            <p className={styles.rs}>Rs. <span className={styles.pri}>{e.price}.00</span> </p>
                            </NavLink>
                        </div>
                    ))}
                </Datadiv>

            </Div4>
            <Line2></Line2>
            <Div2>
                <Div3>
                    What do you think about this search for "table lamps for study"
                </Div3>
                <Icons>
                    <img src={Emojis} />
                </Icons>

                <Line3></Line3>
                <Para>Showing 5 of 5 results </Para>
            </Div2>
            <Div5>
                <Text9>Similar products</Text9>
                <Similarproducts />
            </Div5>
            <div className={styles.desks}>
                <Imgdiv>
                    <img src={Desk} alt="desk" />
                    <Textdiv>
                        <Divpara>Home office</Divpara>
                        <Similar>
                            Must have to create the perfect study space for your kids
                        </Similar>
                        <Ecp>
                            <img src={Rightsmall} alt="arrow" />
                        </Ecp>
                    </Textdiv>
                </Imgdiv>
                <Imgdiv1>
                    <img src={Whitedesk} alt="desk" />
                    <Textdiv>
                        <Divpara>Home office</Divpara>
                        <Similar>
                            Work, study and hobbies in one tidy spot
                        </Similar>
                        <Ecp>
                            <img src={Rightsmall} alt="arrow" />
                        </Ecp>
                    </Textdiv>
                </Imgdiv1>
                <Imgdiv2>
                    <img src={Whitedesk} alt="desk" />
                    <Textdiv>
                        <Divpara>Home office</Divpara>
                        <Similar>
                            Study studies and room for rest
                        </Similar>
                        <Ecp>
                            <img src={Rightsmall} alt="arrow" />
                        </Ecp>
                    </Textdiv>
                </Imgdiv2>
                <Imgdiv3>
                    <img src={Whitedesk} alt="desk" />
                    <Textdiv>
                        <Divpara>Home office</Divpara>
                        <Similar>
                            A calm work and study area in your living room
                        </Similar>
                        <Ecp>
                            <img src={Rightsmall} alt="arrow" />
                        </Ecp>
                    </Textdiv>
                </Imgdiv3>
                <Imgdiv4>
                    <img src={Whitedesk} alt="desk" />
                    <Textdiv>
                        <Divpara>Home office</Divpara>
                        <Similar>
                            How to get a study room with space to go
                        </Similar>
                        <Ecp>
                            <img src={Rightsmall} alt="arrow" />
                        </Ecp>
                    </Textdiv>
                </Imgdiv4>
                <Imgdiv5>
                    <img src={Whitedesk} alt="desk" />
                    <Textdiv>
                        <Divpara>Home office</Divpara>
                        <Similar>
                            Must have to create the perfect study space for your kids
                        </Similar>
                        <Ecp>
                            <img src={Rightsmall} alt="arrow" />
                        </Ecp>
                    </Textdiv>
                </Imgdiv5>
            </div>
            <Div7>
                <Text10>Others also searched for</Text10>
                <Others>
                    <One>Table lamp<span>(69)</span></One>
                    <One>Study lamp(31)</One>
                    <One>Floor lamp(43)</One>
                    <One>Table clock(18)</One>
                    <Five>lamp(132)</Five>
                    <Six>Study Table(519)</Six>
                    <Seven>Wall lamp(55)</Seven>
                    <Eight>Clock(30)</Eight>
                    <Nine>Table lamp Shade(22)</Nine>
                </Others>
                <Footer />
            </Div7>
            
        </>

    )
}

export { SearchResults }