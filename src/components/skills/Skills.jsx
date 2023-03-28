import "./Skills.css"
import LogosBox from '../logosbox/LogosBox'

const Skills = () => {
  return (
    <div className="skills-container">
      <article className="text-container">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-p">My skillset in web development is currently focused on the front end, I have worked with <span className="text-green">HTML</span>, And <span className="text-green">CSS</span> to create fast, visually appealing static websites, utilizing <span className="text-green">Bootstrap</span> and <span className="text-green">Javascript</span> to prototype website functionality, and <span className="text-green">React.js</span> for this portfolio and more interactive projects. </p>
      </article>
        <LogosBox />
    </div>
  )
}

export default Skills