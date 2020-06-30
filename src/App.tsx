import React, { PureComponent } from "react";
import { Router, Switch, Route } from "react-router";
import history from "./history";
import NavBar from "./NavBar";
import Testimonal from "./Testimonal";
import Calculator from "./Calculator";

class App extends PureComponent {
  render() {
    return (
      <>
        <Router history={history}>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Testimonal} />
            <Route exact path="/page-1" component={Testimonal} />
            <Route exact path="/page-2" component={Calculator} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
