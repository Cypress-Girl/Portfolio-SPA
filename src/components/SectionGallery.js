import React from "react";
import projectsInfo from "../data/data";
import ProjectBox from "./ProjectBox";

function SectionGallery() {
    return (
        <section className="gallery">
            <h3>Мои проекты</h3>
            <div className="gallery-box cells-3">

                {projectsInfo.map((item, index) => (
                    (index < 3) ?
                        <ProjectBox key={index} project={item} /> :
                        null
                ))}
            </div>

            <div className="gallery-box cells-4">
                {projectsInfo.map((item, index) => (
                    (index >= 3) ?
                        <ProjectBox key={index} project={item} /> :
                        null
                ))}
            </div>
        </section>
    )
}

export default SectionGallery;