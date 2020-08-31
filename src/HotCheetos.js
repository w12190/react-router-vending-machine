import React from 'react'
import { Link } from 'react-router-dom'

/** HotCheetos
 * 
 * App -> Vending Machine, HotCheetos, MountainDew, Ramen
 */
function HotCheetos() {
  const cheetosImageURL = "https://www.krqe.com/wp-content/uploads/sites/12/2018/11/hot20cheetos20turkey_1542813548738.jpg_62816637_ver1.0.jpg"

  return (
    <div>
      <img src={cheetosImageURL} alt="wowwwwwwwww hot cheeto encrusted turkey"/>
      <p> Hot Cheetos here</p> <br />
      <Link to="/"> Return to Vending Machine</Link>
    </div>
  )
}

export default HotCheetos