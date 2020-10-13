import {NavLink} from "react-router-dom";
import React from "react";
import {ThemeContext} from "../data/ThemeContext";

class Header extends React.Component {
    static contextType = ThemeContext;

    render() {
        return (
            <header style={this.context}>
                <div className="menu-header">
                    <NavLink style={this.context} to="/projects/0">Проекты</NavLink>
                    <NavLink style={this.context} to="/blog">Блог</NavLink>
                    <NavLink style={this.context} to="/contacts">Контакты</NavLink>
                </div>
            </header>
        )
    }
}

export default Header;