import "./LogosBox.css"
import htmlIcon from "../../assets/images/html-icon.svg"
import cssIcon from "../../assets/images/css-icon.svg"
import jsIcon from "../../assets/images/javascript-icon.svg"
import reactIcon from "../../assets/images/react-icon.svg"
import sassIcon from "../../assets/images/sassIcon.svg"
import bootstrapIcon from "../../assets/images/bootstrap-icon.svg"
import gitIcon from "../../assets/images/git-icon.svg"
import githubIcon from "../../assets/images/github-icon.svg"

const LogosBox = () => {
  return (
    <>
    <div className="logo-container">
        <div className="icon-container">
            <img src= {htmlIcon} alt="test" className="logo-icon" />
            <h3>HTML5</h3>   
        </div>

        <div className="icon-container">
            <img src= {cssIcon} alt="test" className="logo-icon" />
            <h3>CSS</h3>   
        </div>

        <div className="icon-container">
            <img src= {jsIcon} alt="test" className="logo-icon" />
            <h3>JavaScript</h3>   
        </div>

        <div className="icon-container">
            <img src= {reactIcon} alt="test" className="logo-icon" />
            <h3>React</h3>   
        </div>

        <div className="icon-container">
            <img src= {sassIcon} alt="test" className="logo-icon" />
            <h3>Saas</h3>   
        </div>

        <div className="icon-container">
            <img src= {bootstrapIcon} alt="test" className="logo-icon" />
            <h3>Bootstrap 5</h3>   
        </div>

        <div className="icon-container">
            <img src= {gitIcon} alt="test" className="logo-icon" />
            <h3>Git</h3>   
        </div>

        <div className="icon-container">
            <img src= {githubIcon} alt="test" className="logo-icon" />
            <h3>GitHub</h3>   
        </div>           
    </div>
    </>
  )
}

export default LogosBox