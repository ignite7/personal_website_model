// React
import React from "react";
import { connect } from "react-redux";

// Components
import Tags from "../components/Layout/Tags";
import RepoContainer from "../components/Repo/RepoContainer";

function Projects({ projectsIntro }) {
  return (
    <>
      <Tags pageName={projectsIntro.pageName} pageURL={projectsIntro.url} />
      <h2>Projects</h2>
      <RepoContainer />
    </>
  );
}

const mapStateToProps = (state) => ({
  projectsIntro: state.projectsIntro,
});
export default connect(mapStateToProps, null)(Projects);
