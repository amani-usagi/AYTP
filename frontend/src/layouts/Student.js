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

export default function Admin() {
    return (
    <>
    <Sidebars />
    <div className="relative md:ml-64 bg-white">
        <StudentNav />
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <Switch>
                <Route path="/student/profile" exact component={Profile} />
                <Route path="/student/mail" exact component={Mail} />
                <Route path="/student/courses" exact component={Courses} />
                <Redirect from="/student" to="/student/index" />
            </Switch>
            <TransFooter/>
        </div>
    </div>
    </>
    );
}
