import React from "react";
import "./App.css";
import {FaBeer} from 'react-icons/fa';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

import NavBar from "./components/NavBar";
import SignIn from "./views/auth/SignIn";
import Home from "./components/Home";
import AdminNav from "./components/Navbars/AdminNav";
import SignUp from "./views/auth/SignUp";
import Admin from "./components/Admin";
import Testing from "./components/Testing";

function App() {
    return(
        <div className="App">
            <AdminNav />
            <Admin />
            <SignIn />
            <Home />
        </div>
    )
}
export default App;