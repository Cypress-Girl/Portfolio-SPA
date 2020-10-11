import React from "react";
import Footer from "../components/Footer";
import SectionSkill from "../components/SectionSkill";
import SectionPerson from "../components/SectionPerson";
import SectionGallery from "../components/SectionGallery";
import {Link} from 'react-router-dom'

function HomePage() {
    return (
        <React.Fragment>
            <Link to="/" className="logo">
                <img src="/images/logo_blue.svg" alt="logo"/>
            </Link>

            <div className="home-page">
                <SectionPerson />
                <SectionSkill />
                <SectionGallery />
            </div>

            <Footer/>
        </React.Fragment>
    )
}

export default HomePage;