// React
import React from "react";
import { connect } from "react-redux";

// Componencts
import Tags from "../components/Layout/Tags";
import Intro from "../components/Intro/Intro";
import FormContainer from "../components/Form/FormContainer";
import Card from "../components/Card/Card";

function Contact({ contactIntro, aboutCard }) {
  return (
    <>
      <Tags pageName={contactIntro.pageName} pageURL={contactIntro.url} />
      <Intro title={contactIntro.title} text={contactIntro.text} />
      <FormContainer />
      <Card
        key={aboutCard.id}
        title={aboutCard.title}
        text={aboutCard.text}
        textButton={aboutCard.textButton}
        to={aboutCard.to}
        externalLink={aboutCard.externalLink}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  contactIntro: state.contactIntro,
  aboutCard: state.cards[0],
});

export default connect(mapStateToProps, null)(Contact);
