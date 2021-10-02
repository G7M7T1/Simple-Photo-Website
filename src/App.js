import React from "react";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import { Switch, Route } from "react-router-dom";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>

        <Route path="/About" exact>
          <About />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
