// React
import React from "react";
import { connect } from "react-redux";

// Components
import Tags from "../components/Layout/Tags";
import Intro from "../components/Intro/Intro";
import Card from "../components/Card/Card";

function Home({ homeIntro, cards }) {
  return (
    <>
      <Tags pageName={homeIntro.pageName} />
      <Intro title={homeIntro.title} text={homeIntro.text} />
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          text={card.text}
          textButton={card.textButton}
          to={card.to}
          externalLink={card.externalLink}
        />
      ))}
    </>
  );
}

const mapStateToProps = (state) => ({
  homeIntro: state.homeIntro,
  cards: state.cards,
});

export default connect(mapStateToProps, null)(Home);
