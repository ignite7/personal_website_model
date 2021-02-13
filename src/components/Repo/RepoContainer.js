// React
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

// Axios
import axios from "axios";

// Actions
import actions from "../../actions";

// Components
import Repo from "./Repo";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

function RepoContainer({ repos, setRepo }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/{USERNAME}/repos")
      .then(({ data }) => {
        setRepo(data);
        setError(false);
      })
      .catch(() => {
        setError(true);
      });
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error || !repos) {
    return <Error text="Something went wrong!" />;
  }

  return (
    <>
      {repos.map((repo) => (
        <Repo key={repo.id} repo={repo} />
      ))}
    </>
  );
}

const mapStateToProps = (state) => ({
  repos: state.repos,
});

const mapDispatchToProps = {
  setRepo: actions.setRepo,
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoContainer);
