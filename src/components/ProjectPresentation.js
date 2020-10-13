import React from "react";
import {TYPE_ARTICLE, TYPE_PROJECT} from "../data/constants";

function TitleProject(props) {
    return (
        <div id="div-title">
            <input type="text" value="Проект" readOnly={true}/>
            <p>
                {props.project.title}
            </p>
        </div>
    )
}

function TitleArticle(props) {
    return (
        <div id="div-title-article">
            <p id="description">
                {props.article.shortInfo}
            </p>
            <div id="div-line" />
            <p id="subscription">
                Ринат Усманов — 15 апреля, 2020
            </p>
        </div>
    )
}

function ProjectPresentation(props) {
    let obj = props.project;
    let title;

    if (props.type === TYPE_PROJECT) {
        obj = props.project;
        title = <TitleProject project={obj} />
    } else if (props.type === TYPE_ARTICLE) {
        obj = props.article;
        title = <TitleArticle article={obj} />
    }

    return (
        <div id="project-presentation">
            <div id="div-2-in-1">
                <div id="div-img">
                    <img src={obj.img} alt={`${obj.id}`}/>
                </div>

                {title}
            </div>
        </div>
    )
}

export default ProjectPresentation;