import React from "react";
import {DIRECTION_NEXT, DIRECTION_PREVIOUS, TYPE_PROJECT} from "../data/constants";
import {blogArticle, projectsInfo} from "../data/data";
import "./NavigateProjects.css";
import {Link} from "react-router-dom";

function ViewProject(props) {

    let orderTitle = (props.type === TYPE_PROJECT) ?
        ((props.direction === DIRECTION_NEXT) ? "Следующий проект" : "Предыдущий проект") :
        ((props.direction === DIRECTION_NEXT) ? "Следующая статья" : "Предыдущая статья");

    let link = (props.type === TYPE_PROJECT) ? `/projects/${props.obj.id}` : `/blog/${props.obj.id}`;

    return (
        <Link to={link}>
                <div className="div-navigate">
                    <div id="div-img">
                        <img src={props.obj.img} alt={`project ${props.obj.id}`}/>
                    </div>
                    <div id="div-title">
                        <p id="order">{orderTitle}</p>
                        <p id="shortInfo">
                            {props.obj.title} — {props.obj.shortInfo}
                        </p>
                    </div>
                </div>
        </Link>
    )
}

function EmptyDiv() {
    return (
        <div style={{width: "50%"}} />
    )
}

function findNearIndex(index, direction, maxIndex) {
    let nearIndex;

    switch (direction) {
        case DIRECTION_PREVIOUS:
            nearIndex = ((index - 1) >= 0) ? (index - 1) : -1;
            break;
        case DIRECTION_NEXT:
            nearIndex = ((index + 1) <= maxIndex) ? (index + 1) : -1;
            break;
        default:
            nearIndex = -1;
            break;
    }
    return nearIndex;
}

function NavigateProjects(props) {
    let indexInArray;
    let arrayOfObjects;
    let nextIndex, previousIndex;

    if (props.type === TYPE_PROJECT){
        arrayOfObjects = projectsInfo;
    } else {
        arrayOfObjects = blogArticle;
    }

    indexInArray = arrayOfObjects.indexOf(props.obj, 0);

    if (indexInArray >= 0) {
        previousIndex = findNearIndex(indexInArray, DIRECTION_PREVIOUS, arrayOfObjects.length - 1);
        nextIndex = findNearIndex(indexInArray, DIRECTION_NEXT, arrayOfObjects.length - 1);
    }

    let previousProjectComponent = (previousIndex >= 0) ?
        <ViewProject obj={arrayOfObjects[previousIndex]} direction={DIRECTION_PREVIOUS} type={props.type} /> : <EmptyDiv/>;
    let nextProjectComponent = (nextIndex >= 0) ?
        <ViewProject obj={arrayOfObjects[nextIndex]} direction={DIRECTION_NEXT} type={props.type} /> : <EmptyDiv/>;

    return (
        <div id="navigate-project">
            {previousProjectComponent}

            <div id="div-separator"></div>

            {nextProjectComponent}
        </div>
    )
}

export default NavigateProjects;