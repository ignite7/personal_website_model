// React
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

// Components
import Layout from "./Layout/Layout";
import Error from "./Error/Error";

// Pages
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";

function App({ path }) {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path={path.home} component={Home} />
          <Route exact path={path.about} component={About} />
          <Route exact path={path.projects} component={Projects} />
          <Route exact path={path.contact} component={Contact} />
          <Route component={Error} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  path: {
    home: state.homeIntro.url,
    about: state.aboutIntro.url,
    projects: state.projectsIntro.url,
    contact: state.contactIntro.url,
  },
});

export default connect(mapStateToProps)(App);
