import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="footer-left">
                <p>Давайте воплощать идеи в жизнь вместе!</p>
                <button type="button" name="button" className="footer-button"></button>
            </div>
            <div className="footer-right">
                <p>Свяжитесь со мной в социальных сетях</p>
                <div className="social">
                    <Link to="/">Instagram</Link>
                    <Link to="/">Facebook</Link>
                    <Link to="/">ВКонтакте</Link>
                    <Link to="/">Telegram</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;