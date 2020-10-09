import React from "react";

function SectionSkill() {
    return (
        <section className="skill">
            <div className="skill-top">
                <img src="/images/skill.svg" alt="skill_icon"/>
                <span className="skill-text">
                        Как разработчик полного цикла, я помогаю стартапам во всем: от html/css верстки для вашего сайта до написания сложных frontend/backend решений и написания клиент-серверного приложения с нуля. Я имел удовольствие сотрудничать с ведущими командами, работающими в различных сферах B2C и B2B в России по всему миру.
                    </span>
            </div>
            <div className="skill-prog">
                <span className="span-prog">HTML/CSS</span>
                <span className="span-prog">JavaScript</span>
                <span className="span-prog">TypeScript</span>
                <span className="span-prog">ReactJS</span>
                <span className="span-prog">Restfull API</span>
                <span className="span-prog">Backend</span>
                <span className="span-prog">Server Side Rendering</span>
            </div>
        </section>
    )
}

export default SectionSkill;