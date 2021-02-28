import React from "react";
import Home from './Home/Home';
import Single from './Single/Single';
import Category from './Category/Category';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/single" component={Single} />
          <Route exact path="/category" component={Category} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;