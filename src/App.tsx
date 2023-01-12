import { Intro } from "~molecules/intro";
import { Header } from "~molecules/header";
import { AppWrapper } from "./App.styles";
import { globalStyles } from "~theme/global-styles";

const App = () => {
  globalStyles();
  return (
    <AppWrapper>
      <Header />
      <Intro />
    </AppWrapper>
  );
};

export default App;
