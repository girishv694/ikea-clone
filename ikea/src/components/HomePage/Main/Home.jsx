
import {Navbar} from '../HomeCompo/Navbar/Navbar';
import {Mainimage} from '../HomeCompo/HomeImage/Mainimage';
import { Offers } from '../HomeCompo/Offers/Offers';
import {Festivecoll} from '../HomeCompo/FestiveCollection/Festivecoll';
import {Topcategory} from '../HomeCompo/TopCategories/Topcategory';
import {Ikeafamily} from '../HomeCompo/Ikeafamily/Ikeafamily';
import {Ratedprod} from '../HomeCompo/Ratedprod/Ratedprod';
import {Betterlive} from '../HomeCompo/Betterlive/Betterlive';
import {Sustainable} from '../HomeCompo/Sustainable/Sustainable';
import {Ideas} from '../HomeCompo/Ideas/Ideas';
import {Return} from '../HomeCompo/Return/Return';
import {Important} from '../HomeCompo/Important/Important';
import {Explore} from '../HomeCompo/Explore/Explore';
import {Footer} from '../HomeCompo/Footer/Footer';
export const Home =() => {


    return(
        <>
        <Navbar />
        <Mainimage />
        <Offers />
        <Festivecoll />
        <Topcategory />
        <Ikeafamily />
        <Ratedprod />
        <Betterlive/>
        <Sustainable />
        <Ideas/>
        <Return />
        <Important />
        <Explore />
        <Footer />
        </>
    )
}