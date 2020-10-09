import React from "react";
import {Link} from "react-router-dom";
import Footer from "../components/Footer";
import "./ProjectsPage.css";

function ProjectsPage() {
    return (
        <React.Fragment>
            <Link to="/" className="logo">
                <img src="/images/logo_not_white.svg" alt="logo"/>
            </Link>

            <div className="projects-page">
                <div id="project-title">
                    projects page
                </div>

                <div id="project-text">
                    <p>
                        The way we work is not sustainable. Sherwin knows this well. He has twenty years of experience as a skilled information technology (IT) professional and is one of the many professionals and managers we interviewed in a Fortune 500 company we call TOMO. Sherwin has a hybrid role where he designs new software solutions to address business problems but also participates directly in developing that new software; he’s both a big picture thinker and attuned to the details of writing solid computer code. On the personal side, Sherwin is a divorced dad with two daughters who live mainly with him. He is also the point person for his elderly mother, who is deciding whether it is time to move into a nursing home.<br/><br/>
                        Sherwin’s family caregiving feels manageable; it is his workload on the job that is overwhelming. Sherwin estimates he works about 70 hours per week. He starts work with calls at 5 a.m., pauses to get his kids ready and off to school, works a full day, prepares dinner and supervises their homework, and then routinely works, at home, until midnight. The long hours and intense pace are perhaps not surprising given the managers he reports to. Sherwin’s manager, Tanay, describes himself as a “super workaholic” and says his own boss (who sits two levels above Sherwin on the organizational chart) pushes teams so hard that he is “trying to get blood from a rock.”
                    </p>
                </div>

            </div>

            <Footer/>
        </React.Fragment>
    )
}

export default ProjectsPage;