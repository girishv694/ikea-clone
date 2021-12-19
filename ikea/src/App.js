import React from 'react'
import Two from './Two'
import Toast from './Toast'
import {Route,Switch} from 'react-router-dom'
import {Home} from './components/HomePage/Main/Home'
import {SearchResults} from "./components/SearchPage/SearchResults"
import { ProductDetail } from './components/ProductDetail/ProductDetails'
import { ShoppingCart } from './components/Cart/ShoppingCart'
function App() {
  return (
    <div>
      {/* <Switch>
        <Route exact path="/"> <Home /> </Route>
         <Route exact path="/search/:id"><SearchResults /></Route>
         <Route exact path="/product/:id"><ProductDetail /></Route>
         <Route exact path="/cart"><ShoppingCart /></Route> 
         
      </Switch> */}
      <Two/>
    </div>
  )
}

export default App
