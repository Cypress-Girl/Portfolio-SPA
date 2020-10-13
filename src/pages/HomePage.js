import React from "react";
import Footer from "../components/Footer";
import SectionSkill from "../components/SectionSkill";
import SectionPerson from "../components/SectionPerson";
import SectionGallery from "../components/SectionGallery";
import {Link} from 'react-router-dom'
import {ThemeContext, themes} from "../data/ThemeContext";

class HomePage extends React.Component {

    static contextType = ThemeContext;
    //toggle to light theme
    componentDidMount() {
        console.log(this.context.theme);
        this.context.setTheme(themes.light);
    }

    render() {
        return (
            <React.Fragment>
                <Link to="/" className="logo">
                    <img src="/images/logo_blue.svg" alt="logo"/>
                </Link>

                <div className="home-page">
                    <SectionPerson/>
                    <SectionSkill/>
                    <SectionGallery/>
                </div>

                <Footer/>
            </React.Fragment>
        )
    }
}

export default HomePage;