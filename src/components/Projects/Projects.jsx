import ProjectCard from "./ProjectCard"
import {info} from "../info/Info"
import "./Projects.css"


const Projects = () => {
  return (
    <section className="project-container">
      {/*<h2>Projects</h2>*/}
      <div className="card-container">
      {info.projects.map((project,index) => {
        return (
          <div key={index}>
            <ProjectCard image={project.image} live={project.live} source={project.source} description={project.description} title={project.title} />
          </div>
        )}
        )
        } 
      </div>
    </section>
  )
}


export default Projects