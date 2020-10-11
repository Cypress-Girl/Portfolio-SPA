import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'
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
                        <NavLink to="/projects/0">Проекты</NavLink>
                        <NavLink to="/blog">Блог</NavLink>
                        <NavLink to="/contacts">Контакты</NavLink>
                    </div>
                </header>
                <Switch>
                    <Route exact={true} path="/">
                        <HomePage/>
                    </Route>

                    <Route path="/projects/:id" children={(props) => <ProjectsPage {...props}/>} />

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
