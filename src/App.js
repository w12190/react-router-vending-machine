import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom"
import VendingMachine from './VendingMachine'
import HotCheetos from './HotCheetos'
import MountainDew from './MountainDew'
import Ramen from './Ramen'

/** App
 * 
 * App -> Vending Machine, HotCheetos, MountainDew, Ramen
 */
function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/hotcheetos">
          <HotCheetos />
        </Route>
        <Route exact path="/mountaindew">
          <MountainDew />
        </Route>
        <Route exact path="/ramen">
          <Ramen />
        </Route>
      </BrowserRouter>
    </div>
  )
}

export default App;
