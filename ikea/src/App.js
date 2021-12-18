import React from 'react'
import Two from './Two'
import Toast from './Toast'
import {Route,Switch} from 'react-router-dom'
import {Home} from './components/HomePage/Main/Home'
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/"> <Home /> </Route>
        {/* <Route exact path="/search/:id"><Search/></Route> */}
      </Switch>
    </div>
  )
}

export default App
