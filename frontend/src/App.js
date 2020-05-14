import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import React, { useEffect } from 'react';

import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import store from './store';

import { Dashboard } from './components/pages/Dashboard';
import { Page } from './components/pages/Page';
import AlertList from './components/layout/Alert';

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
				<AlertList />
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route path="/" component={Page} />
				</Switch>
			</Router>
		</Provider>
	);
};

export default App;
