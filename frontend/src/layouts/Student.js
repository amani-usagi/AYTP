import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import StudentNav from "../components/Navbars/StudentNav";
import Sidebars from "../components/Sidebars/Sidebars";
import TransFooter from "../components/Footers/TransFooter";
import HeaderStats from "../components/Headers/StudentHeader";

// views\
import Profile from "../views/student/Profile";
import Mail from "../views/student/Mails";
import Courses from "../views/student/Courses";
import Payment from "../views/student/payment";
import Dashboard from "../views/student/dashboard";

export default function Student() {
    return (
    <>
    <div className="flex h-screen relative">
        <Sidebars />
        <div className="w-1/2 lg:w-full flex-1 mx-auto pl-16 flex-row">
            <StudentNav />
            <HeaderStats />
            <Switch>
                <Route path="/student/profile" exact component={Profile} />
                <Route path="/student/mail" exact component={Mail} />
                <Route path="/student/courses" exact component={Courses} />
                <Route path="/student/payment" exact component={Payment} />
                <Route path="/student/dashboard" exact component={Dashboard} />
                <Redirect from="/student" to="/student/dashboard" />
            </Switch>
            <TransFooter/>
        </div>
    </div>
    </>
    );
}
