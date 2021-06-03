import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Layouts
import Auth from "./layouts/Auth";
import Admin from "./layouts/Admin";
import Student from "./layouts/Student";
import Tutor from "./layouts/Tutors";

// Other Views
import Landing from "./views/Landing";
import Profile from "./views/Profile";
import Pricing from "./views/Pricing";


ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/auth" component={Auth} />
			<Route path="/student" component={Student} />
			<Route path="/admin" component={Admin} />
			<Route path="/tutor" component={Tutor} />
			<Route path="/" exact component={Landing} />
			<Route path="/home" exact component={Landing} />
			<Route path="/profile" exact component={Profile} />
			<Route path="/pricing" exact component={Pricing} />
			<Redirect from="*" to="/" />
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
