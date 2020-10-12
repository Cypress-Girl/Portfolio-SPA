import React from "react";
import "../data/data";
import {blogArticle} from "../data/data";
import ArticleBox from "./ArticleBox";

function BlogSectionArticle() {
    return (
        <section id="blog-section-articles">
            <div className="gallery-box cells-3">

                {blogArticle.map((item, index) => (
                    (index < 3) ?
                        <ArticleBox key={index} article={item} /> :
                        null
                ))}
            </div>

            <div className="gallery-box cells-4">
                {blogArticle.map((item, index) => (
                    (index >= 3) ?
                        <ArticleBox key={index} article={item} /> :
                        null
                ))}
            </div>

        </section>
    )
}

export default BlogSectionArticle;