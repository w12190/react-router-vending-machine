import React from 'react'
import { Link } from 'react-router-dom'


/** Ramen
 * 
 * App -> Vending Machine, HotCheetos, MountainDew, Ramen
 */
function Ramen() {
  const ramenImageURL = "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1100,c_fill,g_auto,h_619,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200626155532-ramen-pizza-pizza-hut-taiwan2.jpg"

  return (
    <div>
      <img src={ramenImageURL} />
      <p> Ramen here </p> <br />
    </div>
  )
}

export default Ramen