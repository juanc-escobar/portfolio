import { Link } from "react-router-dom";
import "./ProjectCard.css"

const ProjectCard = (props) => {
  const {image,live,source,title,description} = props;
  return (
    <div className="project-card">
        {image ? (
          <img src={image} alt={title} loading="lazy" />
        ) : (
          <div className="preview-container">
            <iframe className="preview" src={live} loading="lazy" />
          </div>
        )}
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