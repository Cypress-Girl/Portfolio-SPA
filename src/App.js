import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import ContactsPage from "./pages/ContactsPage";

function App() {
    return (
        <Router>
            <div className=".app-wrapper">
                <header>
                    <div className="menu-header">
                        <Link to="/">Home</Link>
                        <Link to="/projects">Проекты</Link>
                        <Link to="/blog">Блог</Link>
                        <Link to="/contacts">Контакты</Link>
                    </div>
                </header>
                <Switch>
                    <Route exact={true} path="/">
                        <HomePage/>
                    </Route>
                    <Route exact={true} path="/projects">
                        <ProjectsPage/>
                    </Route>
                    <Route exact={true} path="/blog">
                        <BlogPage/>
                    </Route>
                    <Route exact={true} path="/contacts">
                        <ContactsPage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
