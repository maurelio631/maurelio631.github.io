import "./App.css";
import NavBar from "./Components/NavBar";
import MainContainer from "./Components/MainContainer";
import Footer from "./Components/Footer";
import { Fragment } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"


function App() {
  return (
    <Fragment>
      <NavBar />
      <MainContainer />
      <Footer />
      <SpeedInsights />
    </Fragment>
  );
}

export default App;
