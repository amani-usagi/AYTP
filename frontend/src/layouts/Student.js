import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import NavBar from "../components/Navbars/NavBar";
import Sidebars from "../components/Sidebars/Sidebars";
import TransFooter from "../components/Footers/TransFooter";

// views

export default function Admin() {
    return (
    <>
    <Sidebars />
    <div className="relative md:ml-auto bg-gray-100">
        <NavBar />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <Switch>
                <Redirect from="/student" to="/student/index" />
            </Switch>
            <TransFooter />
        </div>
    </div>
    </>
    );
}
