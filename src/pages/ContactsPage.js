import React from "react";
import {ThemeContext, themes} from "../data/ThemeContext";
import {Link} from "react-router-dom";
import LogoSVG from "../components/LogoSVG";
import "./ContactPage.css";

class ContactsPage extends React.Component {

    static contextType = ThemeContext;
    //toggle to dark theme
    componentDidMount() {
        console.log(this.context.theme);
        this.context.setTheme(themes.dark);
    }

    render() {
        return (
            <React.Fragment>
                <Link to="/" className="logo-mini">
                    <LogoSVG/>
                </Link>

                <div className="contacts-page">
                    <div id="div-left">

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ContactsPage;