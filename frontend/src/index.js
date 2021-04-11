import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Layouts
import Auth from "./layouts/Auth";
import Admin from "./layouts/Admin";

// Other Views
import Landing from "./views/Landing";
import Profile from "./views/Profile"


ReactDOM.render(
	// <React.StrictMode>
	// 	<App />
	// </React.StrictMode>,
	<BrowserRouter>
		<Switch>
			<Route path="/auth" component={Auth} />
			<Route path="/admin" component={Admin} />
			<Route path="/" exact component={Landing} />
			<Route path="/profile" exact component={Profile} />
			<Redirect from="*" to="/" />
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
