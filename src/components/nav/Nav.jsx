import { useState} from "react"
import {Link, useLocation} from "react-router-dom"
import MenuBtn from "./MenuBtn"
import "./Nav.css"

const links = [
  {
    name: 'Home',
    to: '/',
    active: 'Home'
  },
  {
    name: 'About',
    to: '/about',
    active: 'about'
  },
  {
    name: 'Skills',
    to: '/skills',
    active: 'skills'
  },
  {
    name: 'Projects',
    to: '/projects',
    active: 'projects'
  },
  {
    name: 'Contact',
    to: '/contact',
    active: 'contact'
  },



]

const Nav = () => {
  const location = useLocation()
  const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked)
  }

  const handleTwo = (onClick1, onClick2) => (event) => {
    onClick1(event);
    onClick2(event);
  }



  return (
    <nav className="nav">
        <MenuBtn clicked={clicked} handleClick={handleClick} />
        <div className={`initial ${clicked ? ' active' : ''}`}></div>
          <ul className={`nav-list ${clicked ? 'list-active' : ''}`}>
            {links.map((link, index) => {
              return (
                <li key={index} className={(link.active === active) ? "nav-item active-page": "nav-item" }>
                  <Link to= {link.to} onClick={handleTwo(() => setActive(link.active), handleClick)} >
                    <p>{link.name}</p>
                  </Link>
                </li>
              )
            })}
          </ul>
    </nav>
  )
}

export default Nav