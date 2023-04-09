import React from 'react'
import "./Nav.css"

const MenuBtn = (props) => {
  return (
    <div onClick={props.handleClick} className={`icon nav-icon-5 burger ${props.clicked ? 'open' : ''}`} >
        <span></span>
        <span></span>
        <span></span>
    </div>
  )
}

export default MenuBtn