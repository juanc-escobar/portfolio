import "./BaseLayout.css"
import Nav from "./nav/Nav"
import Home from "./home/Home"
import AboutMe from "./about-me/AboutMe"
import Skills from "./skills/Skills"
import Projects from "./Projects/Projects"
import ContactMe from "./contact-me/ContactMe"
import Footer from "./footer/Footer"
import { Route, Routes } from "react-router-dom"

const BaseLayout = () => {
  return (
    <>
    <div className="spa-container">
        <Nav />
        <Routes>
            <Route exact path={'/'} element= {<Home />}/>
            <Route exact path={'/about'} element= {<AboutMe/>}/>
            <Route exact path={'/skills'} element= {<Skills />}/>
            <Route exact path={'/projects'} element= {<Projects />}/>
            <Route exact path={'/contact'} element= {<ContactMe />}/>
        </Routes>
        <Footer />
    </div>
    </>
  )
}

export default BaseLayout