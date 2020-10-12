import React from "react";
import {Link} from "react-router-dom";
import Footer from "../components/Footer";
import LogoSVG from "../components/LogoSVG";
import "./BlogPage.css";
import BlogPageTitle from "../components/BlogPageTitle";
import BlogSectionArticle from "../components/BlogSectionArticles";

function BlogPage() {
    return (
        <React.Fragment>
            <Link to="/" className="logo-mini">
                <LogoSVG/>
            </Link>

            <div className="blog-page">
                <BlogPageTitle />
                <BlogSectionArticle />
                <Footer/>
            </div>

        </React.Fragment>
    )
}

export default BlogPage;