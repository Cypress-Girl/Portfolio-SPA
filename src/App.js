import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import ContactsPage from "./pages/ContactsPage";
import ArticlesPage from "./components/ArticlesPage";
import Header from "./components/Header";
import {ThemeContext} from "./data/ThemeContext";

const themes = {
    dark: {
        background: "#02266D",
        color: "white",
        fill: "white"
    },
    light: {
        background: "white",
        color: "#02266D",
        fill: "#02266D"
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dark: false
        }
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state.dark ? themes.dark : themes.light}>
                <Router>
                    <div className=".app-wrapper">

                        <Header />

                        <Switch>
                            <Route exact={true} path="/">
                                <HomePage/>
                            </Route>

                            <Route path="/projects/:id" children={(props) => <ProjectsPage {...props}/>}/>

                            <Route exact={true} path="/blog">
                                <BlogPage/>
                            </Route>

                            <Route path="/blog/:id" children={(props) => <ArticlesPage {...props}/>}/>

                            <Route exact={true} path="/contacts">
                                <ContactsPage/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </ThemeContext.Provider>
        );
    }
}

export default App;
