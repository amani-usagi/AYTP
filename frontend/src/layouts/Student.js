import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import StudentNav from "../components/Navbars/StudentNav";
import Sidebars from "../components/Sidebars/Sidebars";
import TransFooter from "../components/Footers/TransFooter";

// views
import Schools from "../views/admin/Schools";

export default function Admin() {
    return (
    <>
    <Sidebars />
    </>
    );
}
