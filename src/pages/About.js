// React
import React from "react";
import { connect } from "react-redux";

// Components
import Tags from "../components/Layout/Tags";
import Intro from "../components/Intro/Intro";
import ExternalLink from "../components/Button/ExternalLink";
import Card from "../components/Card/Card";

// Files
import CV from "../assets/files/cv.pdf";

function About({ aboutIntro, contactCard }) {
  return (
    <>
      <Tags pageName={aboutIntro.pageName} pageURL={aboutIntro.url} />
      <Intro title={aboutIntro.title} text={aboutIntro.text} />
      <ExternalLink
        text="Get my CV"
        to={CV}
        download={aboutIntro.cvName}
        externalLink
      />
      <Card
        key={contactCard.id}
        title={contactCard.title}
        text={contactCard.text}
        textButton={contactCard.textButton}
        to={contactCard.to}
        externalLink={contactCard.externalLink}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  aboutIntro: state.aboutIntro,
  contactCard: state.cards[2],
});

export default connect(mapStateToProps, null)(About);
