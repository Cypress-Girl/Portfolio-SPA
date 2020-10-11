import React from "react";
import {DIRECTION_NEXT, DIRECTION_PREVIOUS} from "../data/constants";
import projectsInfo from "../data/data";
import "./NavigateProjects.css";
import {Link} from "react-router-dom";

function ViewProject(props) {
    let orderTitle = (props.direction === DIRECTION_NEXT) ? "Следующий проект" : "Предыдущий проект";

    return (
        // <Link to={`/projects/${props.project.id}`}>
            <div className="div-navigate">
                <div id="div-img">
                    <img src={props.project.img}
                         alt={`project ${props.project.id}`}/>
                </div>
                <div id="div-title">
                    <p id="order">{orderTitle}</p>
                    <p id="shortInfo">
                        {props.project.title} — {props.project.shortInfo}
                    </p>
                </div>
            </div>
        // </Link>
    )
}

function EmptyDiv() {
    return (
        <div style={{width: "50%"}}>
        </div>
    )
}
function findNearIndex(index, direction, maxIndex) {
    let nearIndex;

    switch (direction) {
        case DIRECTION_PREVIOUS:
            nearIndex = ((index - 1) >= 0) ? (index - 1) : -1;
            console.log(`prev ${nearIndex}`);
            break;
        case DIRECTION_NEXT:
            nearIndex = ((index + 1) <= maxIndex) ? (index + 1) : -1;
            console.log(`next ${nearIndex}`);
            break;
        default:
            nearIndex = -1;
            break;
    }
    return nearIndex;
}

function NavigateProjects(props) {
    let indexInArray = projectsInfo.indexOf(props.project, 0);
    console.log(`ID = ${indexInArray}`);
    let nextIndex, previousIndex;

    if (indexInArray >= 0) {
        previousIndex = findNearIndex(indexInArray, DIRECTION_PREVIOUS, projectsInfo.length - 1);
        nextIndex = findNearIndex(indexInArray, DIRECTION_NEXT, projectsInfo.length - 1);
    }

    let previousProjectComponent = (previousIndex >= 0) ?
        <ViewProject project={projectsInfo[previousIndex]} direction={DIRECTION_PREVIOUS}/> : <EmptyDiv/>;
    let nextProjectComponent = (nextIndex >= 0) ?
        <ViewProject project={projectsInfo[nextIndex]} direction={DIRECTION_NEXT}/> : <EmptyDiv/>;

    debugger;

    return (
        <div id="navigate-project">
            {previousProjectComponent}

            <div id="div-separator"></div>

            {nextProjectComponent}
        </div>
    )
}

export default NavigateProjects;