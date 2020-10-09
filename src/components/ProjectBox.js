import React from "react";
import {Link} from 'react-router-dom'

function ProjectBox(props) {
    // return (
    //     <div className="box">
    //         <img src={props.img}/>
    //         <span>
    //             <span className="blue-span">{props.title}</span> — {props.description}
    //         </span>
    //     </div>
    // )
    return (
        <Link to={`/projects/${props.key}`}>
            <div className="box">
                <img src={props.img} alt={`project ${props.title}`} />
                <span>
                <span className="blue-span">{props.title}</span> — {props.description}
            </span>
            </div>
        </Link>
    )
}

export default ProjectBox;