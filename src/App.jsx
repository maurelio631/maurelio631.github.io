import "./App.css";
import NavBar from "./Components/NavBar";
import MainContainer from "./Components/MainContainer";
import Footer from "./Components/Footer";
import { Fragment } from "react";
import { Analytics } from "@vercel/speed-insights/next"


function App() {
  return (
    <Fragment>
      <NavBar />
      <MainContainer />
      <Footer />
      <Analytics />
    </Fragment>
  );
}

export default App;
