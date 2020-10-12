import React from "react";
import {Link} from 'react-router-dom'

function ArticleBox(props) {
    let article = props.article;
    return (
        <Link to={`/blog/${article.id}`}>
            <div className="box">
                <img src={article.img} alt={`project ${article.title}`} />
                <span>
                    {article.shortInfo}
                </span>
            </div>
        </Link>
    )
}

export default ArticleBox;