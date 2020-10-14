import {NavLink} from "react-router-dom";
import React from "react";
import {ThemeContext} from "../data/ThemeContext";

class Header extends React.Component {

    static contextType = ThemeContext;

    render() {
        return (
            <header {...this.context.theme}>
                <div id="left-side"/>

                <div className="menu-header">
                    <NavLink {...this.context.theme} to="/projects/0">Проекты</NavLink>
                    <NavLink {...this.context.theme} to="/blog">Блог</NavLink>
                    <NavLink {...this.context.theme} to="/contacts">Контакты</NavLink>
                </div>
            </header>
        )
    }
}

export default Header;