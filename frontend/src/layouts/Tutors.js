import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components
import TutorSidebar from '../components/Sidebars/TutorSidebar';
import Footer from '../components/Footers/TransFooter';
import StudentNav from "../components/Navbars/StudentNav";
import HeaderStats from '../components/Headers/StudentHeader';


// views
import Profile from "../views/tutor/Profile";
import Dashboard from "../views/tutor/Dashboard";
import Mail from "../views/tutor/Mails";
import Courses from "../views/tutor/Courses";
import Payment from "../views/tutor/payment";

export default function Tutors() {
    return (
        <>
        <div className="flex h-screen relative">
            <TutorSidebar />
            <div className="w-1/2 lg:w-full flex-1 mx-auto pl-16 flex-row">
                <StudentNav />
                <HeaderStats />
                <Switch>
                    <Route path="/tutor/profile" exact component={Profile} />
                    <Route path="/tutor/mail" exact component={Mail} />
                    <Route path="/tutor/dashboard" exact component={Dashboard} />
                    <Route path="/tutor/courses" exact component={Courses} />
                    <Route path="/tutor/payment" exact component={Payment} />
                    <Redirect from="/tutor" to="/tutor/dashboard"/>
                </Switch>
                <Footer />
            </div>
        </div>
        </>
    );
}
