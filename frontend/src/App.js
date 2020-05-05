import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import React, { useEffect } from 'react';
import axios from 'axios';

import { Dashboard } from './components/layout/Dashboard';
import { Page } from './components/layout/Page';
import Alert from './components/layout/Alert';

import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

if (process.env.NODE_ENV === 'production') {
	axios.defaults.baseURL = 'https://api.johnappseed.com';
} else {
	axios.defaults.baseURL = 'http://localhost:7000';
}

const App = () => {

	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	return (
		<Provider store={store}>
			<Router>
				<Alert />
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route path="/" component={Page} />
				</Switch>
			</Router>
		</Provider>
	);
};

export default App;
