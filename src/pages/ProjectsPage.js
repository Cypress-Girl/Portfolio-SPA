import React from "react";
import {Link} from "react-router-dom";
import Footer from "../components/Footer";
import "./ProjectsPage.css";
import {projectsInfo} from "../data/data";
import ProjectPresentation from "../components/ProjectPresentation";
import NavigateProjects from "../components/NavigateProjects";
import LogoSVG from "../components/LogoSVG";
import {TYPE_PROJECT} from "../data/constants";
import {ThemeContext, themes} from "../data/ThemeContext";

class ProjectsPage extends React.Component {
    constructor(props) {
        super(props);
        this.project = projectsInfo[this.props.match.params.id];
    }

    static contextType = ThemeContext;
    //toggle to light theme
    componentDidMount() {
        this.context.setTheme(themes.light);
    }

    render() {
        return (
            <React.Fragment>
                <Link to="/" className="logo-mini">
                    <LogoSVG/>
                </Link>

                <div className="projects-page">
                    {/*<ProjectPresentation project={this.project} type={TYPE_PROJECT}/>*/}
                    <ProjectPresentation project={projectsInfo[this.props.match.params.id]} type={TYPE_PROJECT}/>

                    <div id="project-text">
                        <p>
                            {/*{this.project.description}*/}
                            {projectsInfo[this.props.match.params.id].description}
                        </p>
                    </div>

                    {/*<NavigateProjects obj={this.project} type={TYPE_PROJECT}/>*/}
                    <NavigateProjects obj={projectsInfo[this.props.match.params.id]} type={TYPE_PROJECT}/>
                </div>

                <Footer/>
            </React.Fragment>
        )
    }
}

export default ProjectsPage;