import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import StudentNav from "../components/Navbars/StudentNav";
import Sidebar from "../components/Sidebars/StudentSidebar";
import TransFooter from "../components/Footers/TransFooter";
import HeaderStats from "../components/Headers/StudentHeader";

// views\
import Profile from "../views/student/Profile";
import Mail from "../views/student/Mails";
import Courses from "../views/student/Courses";
import Pay from "../views/student/pay";
import Inbox from "../views/student/Inbox";
import NewCourse from "../views/student/NewCourse";


export default function Student() {
    return (
    <>
    <Sidebar />
    <div className="relative md:ml-64 bg-white">
        <StudentNav />
        <HeaderStats />
        <div className="mx-auto w-full -m-24">
            <Switch>
                <Route path="/student/profile" exact component={Profile} />
                <Route path="/student/mail" exact component={Mail} />
                <Route path="/student/courses" exact component={Courses} />
                <Route path="/student/pay" exact component={Pay} />
                <Route path="/student/inbox" exact component={Inbox} />
                <Route path="/student/newcourse" exact component={NewCourse} />
                <Redirect from="/student" to="/student/index" />
            </Switch>
            <TransFooter/>
        </div>
    </div>
    </>
    );
}
