import React from 'react'
import { Link } from 'react-router-dom'


/** Mountain
 * 
 * App -> Vending Machine, HotCheetos, MountainDew, Ramen
 */
function MountainDew() {
  const mountainDewImageURL = "https://img1.mashed.com/img/gallery/the-untold-truth-of-mountain-dew/intro-1572901462.jpg"
  
  return (
    <div>
      <img src={mountainDewImageURL} alt="xtreme mountain dew"/>
      <p> Mountain Dew here</p> <br />
      <Link to="/"> Return to Vending Machine</Link>
    </div>
  )
}

export default MountainDew