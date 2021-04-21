import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "../components/Navbars/AdminNavbar";
import SideBar from "../components/Sidebars/SideBar";
import HeaderStats from "../components/Navbars/HeaderStats";
import TransFooter from "../components/Footers/TransFooter";

// views
import Schools from "../views/admin/Schools";
import Settings from "../views/admin/Settings";
import Dashboard from "../views/admin/Dashboard";
import Mail from "../views/admin/Mail";
import Manage from "../views/admin/Manage";
import Profile from "../views/admin/Profile";

export default function Admin() {
    return (
    <>
    <SideBar />
    <div className="relative md:ml-64 bg-white">
        <AdminNavbar />
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <Switch>
                <Route path="/admin/dashboard" exact component={Dashboard} />
                <Route path="/admin/schools" exact component={Schools} />
                <Route path="/admin/settings" exact component={Settings} />
                <Route path="/admin/mail" exact component={Mail} />
                <Route path="/admin/manage" exact component={Manage} />
                <Route path="/admin/profile" exact component={Profile} />
                <Redirect from="/admin" to="/admin/dashboard" />
            </Switch>
            <TransFooter />
        </div>
    </div>
    </>
    );
}
