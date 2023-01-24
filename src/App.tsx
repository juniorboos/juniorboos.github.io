import { Header } from "~molecules/header";
import { AppWrapper } from "./App.styles";
import { globalStyles } from "~theme/global-styles";
import { About } from "~sections/about";
import { Intro } from "~sections/intro";

const App = () => {
  globalStyles();
  return (
    <AppWrapper>
      <Header />
      <Intro />
      <About />
    </AppWrapper>
  );
};

export default App;
