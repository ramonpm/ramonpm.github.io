import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "../pages/About/About";
import TopBar from "../components/TopBar/TopBar";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Route path="/" component={TopBar} />
      <Route path="/" exact component={About} />
      <Route path="/about/" component={About} />
    </Router>
  );
}

export default AppRouter;
