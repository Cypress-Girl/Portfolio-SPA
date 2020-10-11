import React from "react";
import {Link} from 'react-router-dom'

function ProjectBox(props) {
    let project = props.project;
    return (
        <Link to={`/projects/${project.id}`}>
            <div className="box">
                <img src={project.img} alt={`project ${project.title}`} />
                <span>
                    <span className="blue-span">{project.title}</span> — {project.shortInfo}
                </span>
            </div>
        </Link>
    )
}

export default ProjectBox;