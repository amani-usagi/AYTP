import React from "react";
import { Switch, Route, Redirect } from "react-dom";

// Components
import AdminNav from "../components/Navbars/AdminNav";
import SideNav from "../components/Navbars/SideNav";
import HeaderStats from "../components/Headers/HeaderStats";
import FooterMini from "../components/Footers/FooterMini"

// Views
import Dashboard from "../views/admin/Dashboard";
import Settings from "../views/admin/Settings";
import Tables from "../views/admin/Tables";

function Admin() {
    return(
        <>
            <SideNav />
            <div className="relative md:ml-64 bg-blue-500">
                <AdminNav />
                <HeaderStats />
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <Switch>
                        <Route path="/admin/dashboard" exact component={Dashboard} />
                        <Route path="/admin/settings" exact component={Settings} />
                        <Route path="/admin/tables" exact component={Tables} />
                        <Redirect from="/admin" to="/admin/dashboard" />
                    </Switch>
                    <FooterMini />
                </div>
            </div>
        </>
    );
}

export default Admin()