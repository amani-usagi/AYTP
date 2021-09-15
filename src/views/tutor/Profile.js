import React from "react";

// components

import Profile from "../../components/Cards/Profile";
import Settings from "../../components/Cards/Settings";


export default function Schools() {
    return (
    <>
    <div className="flex flex-wrap -mt-16">
        <div className="w-full xl:w-5/12 mb-12 xl:mb-0 px-4">
            <Profile />
        </div>
        <div className="w-full xl:w-7/12 mb-12 xl:mb-0 px-4">
            <Settings />
        </div>
    </div>
    </>
    );
}
