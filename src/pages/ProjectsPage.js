import React from "react";
import {Link} from "react-router-dom";
import Footer from "../components/Footer";
import "./ProjectsPage.css";
import {projectsInfo} from "../data/data";
import ProjectPresentation from "../components/ProjectPresentation";
import NavigateProjects from "../components/NavigateProjects";
import LogoSVG from "../components/LogoSVG";
import {TYPE_PROJECT} from "../data/constants";

function ProjectsPage(props) {
    let project = projectsInfo[props.match.params.id];
    return (
        <React.Fragment>
            <Link to="/" className="logo-mini">
                <LogoSVG/>
            </Link>

            <div className="projects-page">
                <ProjectPresentation project={project} type={TYPE_PROJECT}/>

                <div id="project-text">
                    <p>
                        {project.description}
                    </p>
                </div>

                <NavigateProjects project={project}/>
            </div>

            <Footer/>
        </React.Fragment>
    )
}

export default ProjectsPage;