import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Root } from "./components/root";
import { Matches } from "./components/matches";
import { Results } from "./components/results";
import { newTeam } from "./components/new_team";
import { Home } from "./components/home";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Root} />
      <Switch>
        <Route path="/matches" component={Matches} />
        <Route path="/results" component={Results} />
        <Route path="/admin/team" component={newTeam} />
        <Route path="/home" component={Home} />
      </Switch>
      <Route path="api/teams" />
    </Router>
  );
}

export default App;
