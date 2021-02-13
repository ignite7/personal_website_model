// React
import React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";

// Images
import icon from "../../assets/images/icon.png";

function Tags({ title, description, pageName, pageURL }) {
  return (
    <Helmet>
      <link rel="shortcut icon" href={icon} type="image/png" />
      <title>{`${title} ${pageName}`}</title>
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta name="description" content={description} />
      <meta property="og:title" content={pageName} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={icon} />
      <meta
        property="og:url"
        content={
          pageURL ? `sergiovanberkel.com${pageURL}` : "sergiovanberkel.com"
        }
      />
      <meta property="og:site_name" content="Sergio van Berkel" />
      <meta property="og:locale" content="en" />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}

const mapStateToProps = (state) => ({
  title: state.title,
  description: state.description,
});

export default connect(mapStateToProps, null)(Tags);
