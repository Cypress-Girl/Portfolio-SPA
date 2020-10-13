import React, {useContext} from "react";
import {ThemeContext} from "../data/ThemeContext";

function LogoSVG() {
    const ctx = useContext(ThemeContext);

    return (
        <svg width="42" height="31" xmlns="http://www.w3.org/2000/svg" style={ctx.theme} className="logo-svg"
             viewBox="0 0 42 31">
            <path
                d="M35.6 6.7V19c0 2.3-.8 3.7-1.5 4.5a6 6 0 01-4.8 2 6 6 0 01-4.8-2 6.6 6.6 0 01-1.4-4.5V0H12C9.8 0 7 .2 4.7 2.3a9.3 9.3 0 00-2.9 7A9 9 0 005 16.6c1 .7 2.1 1.2 3.2 1.4L0 30.3h6.8l10-16.4h-3.5c-1.2 0-5.7 0-5.7-4.6 0-4.4 4.5-4.5 5.6-4.5h4v13.8c0 2.8.4 5.7 2.3 8 2.1 2.9 6 4.4 9.8 4.4 4 0 7.7-1.5 10-4.4 1.7-2.3 2.2-5.2 2.2-8V4l-5.9 2.7z"/>
        </svg>
    )
}

export default LogoSVG;