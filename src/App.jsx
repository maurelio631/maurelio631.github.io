import "./App.css";
import NavBar from "./Components/NavBar";
import MainContainer from "./Components/MainContainer";
import Footer from "./Components/Footer";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <NavBar />
      <MainContainer />
      <Footer />
    </Fragment>
  );
}

export default App;
