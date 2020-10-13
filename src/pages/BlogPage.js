import React from "react";
import {Link} from "react-router-dom";
import Footer from "../components/Footer";
import LogoSVG from "../components/LogoSVG";
import "./BlogPage.css";
import BlogPageTitle from "../components/BlogPageTitle";
import BlogSectionArticle from "../components/BlogSectionArticles";
import {ThemeContext, themes} from "../data/ThemeContext";

class BlogPage extends React.Component {
    constructor(props) {
        super(props);
    }

    static contextType = ThemeContext;

    //toggle to light theme
    componentDidMount() {
        this.context.setTheme(themes.light);
    }

    render() {
        return (
            <React.Fragment>
                <Link to="/" className="logo-mini">
                    <LogoSVG/>
                </Link>

                <div className="blog-page">
                    <BlogPageTitle/>
                    <BlogSectionArticle/>
                    <Footer/>
                </div>

            </React.Fragment>
        )
    }
}

export default BlogPage;