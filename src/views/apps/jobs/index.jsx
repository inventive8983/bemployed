import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import Create from './create';
import JobDetails from './JobDetails';
import Jobs from './jobs';

const Forms = props => {
  const { match } = props
	return (
		<Switch>
			<Route path={`${match.url}/open`} component={Jobs} />
			<Route path={`${match.url}/closed`} component={Jobs} />
			<Route path={`${match.url}/create`} component={Create} />
			<Route path={`${match.url}/view/:id`} component={JobDetails} />
			<Route path={`${match.url}/view/:id/edit`} component={JobDetails} />
			<Route path={`${match.url}/view/:id/change-status`} component={JobDetails} />
			<Route path={`${match.url}/view/:id/delete`} component={JobDetails} />
			<Redirect to={`${match.url}/open`} />
		</Switch>
	)
}

export default Forms
