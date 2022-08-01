import React from "react";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";

import Cards from "./components/Cards";
import CardsDetails from "./components/CardsDetails";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/cart/:id" component={CardsDetails} />
        <Route path="/" component={Cards} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
