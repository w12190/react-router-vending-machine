import React from 'react'
import { Link } from 'react-router-dom'


/** Vending Machine
 * 
 * App -> Vending Machine, HotCheetos, MountainDew, Ramen
 */
//add navlink
function VendingMachine() {
  const vendingMachineImageURL = "https://cdn.shopify.com/s/files/1/0506/3177/products/Seaga-SM16SB-snack-machine.jpg?v=1490305882"

  return (
    <div>
      <ul>
        <img src={vendingMachineImageURL}/>
        <li> <Link to="/hotcheetos"> Hot Cheetos </Link> </li>
        <li> <Link to="/mountaindew"> Mountain Dew </Link> </li>
        <li> <Link to="/ramen"> Ramen </Link> </li>
      </ul>
    </div>
  )
}

export default VendingMachine