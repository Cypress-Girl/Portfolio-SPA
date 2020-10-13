import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import ContactsPage from "./pages/ContactsPage";
import ArticlesPage from "./components/ArticlesPage";
import Header from "./components/Header";
import {ThemeContext, themes} from "./data/ThemeContext";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.setTheme = (newTheme) => {
            this.setState(state => ({
                theme: newTheme
            }))
        }

        this.state = {
            theme: themes.light,
            setTheme: this.setTheme
        }
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                <Router>
                    <div className=".app-wrapper">

                        <Header />

                        <Switch>
                            <Route exact={true} path="/">
                                <HomePage/>
                            </Route>

                            <Route exact={true} path="/projects/:id" children={(props) => <ProjectsPage {...props}/>}/>

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
