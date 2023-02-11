import { Header } from "~molecules/header";
import { AppWrapper } from "./App.styles";
import { globalStyles } from "~theme/global-styles";
import Intro from "~sections/intro";
import About from "~sections/about";
import Professional from "~sections/professional";
import Projects from "~sections/projects";
import Articles from "~sections/articles";
import Contact from "~sections/contact";

const App = () => {
  globalStyles();
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
