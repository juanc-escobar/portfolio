import "./ProjectCard.css"
import homeTek from "../../assets/images/home-tek-img.png"

const ProjectCard = () => {
  return (
    <div className="project-card">
        <div className="card-header">
            <img src={homeTek} alt="html & css project" />
        </div>
        <div className="card-body">
            <p>Home-Tek Is a website about home automation its a fully responsive website for a client to showcase their company's information. The website was developed using HTML5, CSS, Sass to ensure fast load times and proper visualization on any device.</p>
        </div>
        <div className="card-footer">
            <button className="btn">View</button>
        </div>
    </div>
  )
}

export default ProjectCard