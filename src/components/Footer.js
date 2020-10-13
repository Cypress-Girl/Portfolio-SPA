import React from "react";
import "./Footer.css";
import SocialLink from "./SocialLink";

function Footer() {
    return (
        <footer>
            <div className="footer-left">
                <p>Давайте воплощать идеи в жизнь вместе!</p>
                <button type="button" name="button" className="footer-button"></button>
            </div>
            <div className="footer-right">
                <p>Свяжитесь со мной в социальных сетях</p>
                <SocialLink/>
            </div>
        </footer>
    )
}

export default Footer;