import React from 'react'
import Two from './Two'
import Toast from './Toast'
import {Route,Switch} from 'react-router-dom'
import {Home} from './components/HomePage/Main/Home'
import {SearchResults} from "./components/SearchPage/SearchResults"
import { ProductDetail } from './components/ProductDetail/ProductDetails'
import { ShoppingCart } from './components/Cart/ShoppingCart'
import ShopingCart from './components/page2/ShopingCart'
import Payment from './components/Page1/Payment'
import PaymentBox from './components/Page1/PaymentBox'
import PaymentType from './components/Page1/PaymentType'
import UpiBox from './components/Page1/UPiBox'
import UpiType from './components/Page1/UpiType'
import PaymentComponent from './components/Page1/PaymentmainComponent'
import { Deliverypage } from './components/Deliveryinformation/DeliMain/Deliverypage'
import Revieworder from './components/page3/reviewOrderpage/Revieworder'
function App() {
  return (
    <>
       <Switch>
        <Route exact path="/"> <Home /> </Route>
         <Route exact path="/search/:id"><SearchResults /></Route>
         <Route exact path="/product/:id"><ProductDetail /></Route>
         <Route exact path="/products"><SearchResults /></Route>
         <Route exact path="/cart"><ShoppingCart /></Route>
         <Route exact path="/order"><ShopingCart /></Route>  
          <Route exact path="/info"><Deliverypage /></Route>
         <Route exact path="/review"><Revieworder /></Route>
         <Route exact path="/payment"><PaymentComponent /></Route>
        <Route exact path="/login"><Two /></Route>
      </Switch>
      </>
  )
}

export default App
