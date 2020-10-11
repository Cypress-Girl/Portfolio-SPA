import React from "react";

function ProjectPresentation(props) {
    let project = props.project;

    return (
        <div id="project-presentation">
            <div id="div-2-in-1">
                <div id="div-img">
                    <img src={project.img}
                         alt={`project ${project.id}`}/>
                </div>
                <div id="div-title">
                    <input type="text" value="Проект" readOnly={true}/>
                    <p>
                        {project.title}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectPresentation;