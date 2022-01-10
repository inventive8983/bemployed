import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import Candidates from './candidates';
import Create from './create';
import Details from './details';

const Forms = props => {
  const { match } = props
	return (
		<Switch>
			<Route path={`${match.url}/list`} component={Candidates} />
			<Route path={`${match.url}/create`} component={Create} />
			<Route path={`${match.url}/view/:id`} component={Details} />
			<Route path={`${match.url}/view/:id/edit`} component={Details} />
			<Route path={`${match.url}/view/:id/change-status`} component={Details} />
			<Route path={`${match.url}/view/:id/delete`} component={Details} />
			<Redirect to={`${match.url}/list`} />
		</Switch>
	)
}

export default Forms
