import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, Loading } from "./components";

const HomeLazy = lazy(() => import("./pages/Home/Home"));
const AboutLazy = lazy(() => import("./pages/About/About"));
const AddLazy = lazy(() => import("./pages/Add/Add"));

function Routes() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={HomeLazy}></Route>
          <Route exact path="/view" component={AboutLazy}></Route>
          <Route exact path="/add" component={AddLazy}></Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
