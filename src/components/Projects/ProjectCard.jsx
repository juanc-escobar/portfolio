import { Link } from "react-router-dom";
import "./ProjectCard.css"

const ProjectCard = (props) => {
  const {image,live,source,title,description} = props;
  return (
    <div className="project-card">
        <div className="card-header">
            <img src={image} alt="html & css project" />
        </div>
        <div className="card-body">
            <p>{description}</p>
        </div>
        <div className="card-footer">
          <Link to={live} target="_blank">
            <button className="btn">Demo</button>
          </Link>
          <Link to={source} target="_blank">
            <button className="btn">Source</button>
          </Link>
        </div>
    </div>
  )
}

export default ProjectCard