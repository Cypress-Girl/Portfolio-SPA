import {NavLink} from "react-router-dom";
import React from "react";
import {ThemeContext, themes} from "../data/ThemeContext";

class Header extends React.Component {
    static contextType = ThemeContext;

    render() {
        return (
            <header style={this.context.theme}>
                <div id="left-side" style={this.context.theme === themes.light ?
                    {backgroundColor: "white"} : {backgroundColor: "#011F5C"}}/>

                <div className="menu-header">
                    <NavLink style={this.context.theme} to="/projects/0">Проекты</NavLink>
                    <NavLink style={this.context.theme} to="/blog">Блог</NavLink>
                    <NavLink style={this.context.theme} to="/contacts">Контакты</NavLink>
                </div>
            </header>
        )
    }
}

export default Header;