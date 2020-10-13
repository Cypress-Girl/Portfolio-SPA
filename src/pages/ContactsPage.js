import React from "react";
import {ThemeContext, themes} from "../data/ThemeContext";
import {Link} from "react-router-dom";
import LogoSVG from "../components/LogoSVG";
import "./ContactPage.css";
import SocialLink from "../components/SocialLink";

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
                        <SocialLink />
                    </div>
                    <div id="div-right">
                        <p id="title">Информация о проекте</p>
                        <div id="div-box">
                            <p id="text-info">
                                The way we work is not sustainable. Sherwin knows this well. He has twenty years of experience as a skilled information technology (IT) professional and is one of the many professionals and managers we interviewed in a Fortune 500 company we call TOMO. Sherwin has a hybrid ...
                            </p>
                            <div id="div-load">
                                <button id="btn-load">+ Загрузить файл</button>
                                <button id="btn-file-name">fdgerr.jpeg</button>
                            </div>
                        </div>
                        <p id="title">Ваши контакты</p>
                        <input type="text" placeholder="Ваше имя"/>
                        <input type="text" placeholder="Ваш email"/>
                        <button type="button" id="send">Отправить</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ContactsPage;