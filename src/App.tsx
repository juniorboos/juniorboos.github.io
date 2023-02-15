import { initialize } from "react-ga";
import { Header } from "~molecules/header";
import { AppWrapper } from "./App.styles";
import { globalStyles } from "~theme/global-styles";
import Intro from "~sections/intro";
import About from "~sections/about";
import Professional from "~sections/professional";
import Projects from "~sections/projects";
import Articles from "~sections/articles";
import Contact from "~sections/contact";
import { TRACKING_ID, useAnalytics } from "./hooks/useAnalytics";

initialize(TRACKING_ID);

const App = () => {
  globalStyles();
  useAnalytics();
  return (
    <AppWrapper>
      <Header />
      <Intro id="intro-section" />
      <About id="about-section" />
      <Professional id="professional-section" />
      <Projects id="projects-section" />
      <Articles id="articles-section" />
      <Contact id="contact-section" />
    </AppWrapper>
  );
};

export default App;
