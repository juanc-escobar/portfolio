import { useState, useEffect } from "react"
import {Link, useLocation} from "react-router-dom"
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
  const [showMenu, setShowMenu] = useState(false);

  useEffect (() =>{
    const handleResize = () => {
      if (window.innerWidth > 998) {
        setShowMenu(true);
      } 
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
 

  return (
    <nav className="nav">
        <div className="menu-icon" onClick={toggleMenu}></div>
        <ul className={showMenu ? "nav-list show" : "nav-list"}>
          {links.map((link, index) => {
            return (
              <li key={index} className={(link.active === active) ? "nav-item active": "nav-item" }>
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