import { lazy, Suspense } from "react";
import { Header } from "~molecules/header";
import { AppWrapper } from "./App.styles";
import { globalStyles } from "~theme/global-styles";
import Intro from "~sections/intro";
const About = lazy(() => import("~sections/about"));
const Professional = lazy(() => import("~sections/professional"));
const Projects = lazy(() => import("~sections/projects"));
// const Articles = lazy(() => import("~sections/articles"));
const Contact = lazy(() => import("~sections/contact"));

const App = () => {
  globalStyles();
  return (
    <AppWrapper>
      <Suspense fallback={<p>Loading</p>}>
        <Header />
        <Intro id="intro-section" />
        <About id="about-section" />
        <Professional id="professional-section" />
        <Projects id="projects-section" />
        {/* <Articles id="articles-section" /> */}
        <Contact id="contact-section" />
      </Suspense>
    </AppWrapper>
  );
};

export default App;
