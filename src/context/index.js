// React
import { createStore } from "redux";

// Reducers
import reducer from "../reducers";

// Connect Redux dev tools
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// Page state
const pageState = {
  home: {
    title: "Home",
    url: "/",
  },
  about: {
    title: "About",
    url: "/about",
  },
  projects: {
    title: "Projects",
    url: "/projects",
  },
  contact: {
    title: "Contact",
    url: "/contact",
  },
};

// Initial state
const initialState = {
  title: "TITLE WEBPAGE",
  description: "DESCRIPTION",
  homeIntro: {
    pageName: pageState.home.title,
    title: "TITLE",
    text: `TEXT`,
    url: pageState.home.url,
  },
  aboutIntro: {
    pageName: pageState.about.title,
    title: "TITLE",
    text: `TEXT`,
    cvName: "CVNAME",
    url: pageState.about.url,
  },
  projectsIntro: {
    pageName: pageState.projects.title,
    url: pageState.projects.url,
  },
  contactIntro: {
    pageName: pageState.contact.title,
    title: pageState.contact.title,
    text: `TEXT`,
    url: pageState.contact.url,
  },
  cards: [
    {
      id: 1,
      title: "TITLE",
      text: "TEXT",
      textButton: "TEXTBUTTON",
      to: pageState.about.url,
      externalLink: false,
    },
    {
      id: 2,
      title: pageState.projects.title,
      text: "TEXT",
      textButton: "TEXTBUTTON",
      to: pageState.projects.url,
      externalLink: false,
    },
    {
      id: 3,
      title: pageState.contact.title,
      text: "TEXT",
      textButton: "TEXTBUTTON",
      to: pageState.contact.url,
      externalLink: false,
    },
  ],
  repos: [],
};

// Store
const store = createStore(reducer, initialState, composeEnhancers);

export default store;
