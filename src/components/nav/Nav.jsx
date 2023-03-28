import "./Nav.css"
import { useState } from "react"
import {Link, useLocation} from "react-router-dom"

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
  return (
    <nav className="nav">
        <ul>
          {links.map((link, index) => {
            return (
              <li key={index} className={(link.active === active) && "active" }>
                <Link to= {link.to} onClick={() => setActive(link.active)}>
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