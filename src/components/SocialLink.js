import React from 'react';
import {Link} from "react-router-dom";

function SocialLink() {
    return (
        <div className="social">
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">ВКонтакте</Link>
            <Link to="/">Telegram</Link>
        </div>
    )
}

export default SocialLink;