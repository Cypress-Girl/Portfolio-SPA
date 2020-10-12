import React from "react";
import {Link} from "react-router-dom";
import LogoSVG from "./LogoSVG";
import ProjectPresentation from "./ProjectPresentation";
// import NavigateProjects from "./NavigateProjects";
import Footer from "./Footer";
import {blogArticle} from "../data/data";
import {TYPE_ARTICLE} from "../data/constants";

function ArticlesPage(props) {
    let article = blogArticle[props.match.params.id];
    return (
        <React.Fragment>
            <Link to="/" className="logo-mini">
                <LogoSVG/>
            </Link>

            <div className="articles-page">
                <ProjectPresentation article={article} type={TYPE_ARTICLE}/>

                <div id="project-text">
                    <p>
                        {article.description}
                    </p>
                </div>

                {/*<NavigateProjects project={project}/>*/}
            </div>

            <Footer/>
        </React.Fragment>
    )
}

export default ArticlesPage;