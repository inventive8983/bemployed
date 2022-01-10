import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Billing from "./billing";
import Dashboard from "./dashboard";
import Jobs from "./jobs/index";
import Settings from "./settings";
import Candidates from "./candidates/index";

export const AppViews = ({match}) => {
  return (
    <>
    <Suspense fallback={<>Loading...</>}>
      <Switch>
        <Route path={`${match.url}/dashboard`} component={Dashboard} />
        <Route path={`${match.url}/jobs`} component={Jobs} />
        <Route path={`${match.url}/candidates`} component={Candidates} />
        <Route path={`${match.url}/billing/:id`} component={Billing} />
        <Route path={`${match.url}/settings`} component={Settings} />
      </Switch>
    </Suspense>
    </>
  )
}

export default AppViews;