import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./dashboard";

export const AppViews = ({match}) => {
  return (
    <>
    <Suspense fallback={<>Loading...</>}>
      <Switch>
        <Route path={`${match.url}/dashboard`} component={Dashboard} />
      </Switch>
    </Suspense>
    </>
  )
}

export default AppViews;