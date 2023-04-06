import AboutImg from "./AboutImg"
import "./AboutMe.css"


const AboutMe = () => {
  return (
    <div className="body-container">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">I'm Juan Camilo - I'm an engineer, driven by continuous learning and personal growth. My passion lies in crafting impactful websites that enhance user experiences.</p>
        <p className="about-text">With a background in electrical engineering, I've spent a decade working on diverse projects, but always felt curious about programming. So, I took the leap and fell in love with it! Now, I'm constantly seeking new opportunities to expand my skills and create exceptional web experiences. Let's collaborate and build something extraordinary together!</p>
      </div>
      <AboutImg />
    </div>
  )
}

export default AboutMe