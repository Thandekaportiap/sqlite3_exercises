

import React from 'react'
import { Link } from 'react-router-dom'

const navBar = () => {
  return (
    <div className="w3-bar w3-blue-grey">
 <Link to={"./"} className="w3-bar-item w3-button">Home</Link>
  <Link to={'./addUser'} className="w3-bar-item w3-button">Add User</Link>
  {/* <Link to={'./exercises'} className="w3-bar-item w3-button">Exercise</Link>
  <Link to={'./contact'} className="w3-bar-item w3-button">Contact-Me</Link>
  <Link to={'./movie'} className="w3-bar-item w3-button">Movies</Link> */}
</div>

  )
}

export default navBar
