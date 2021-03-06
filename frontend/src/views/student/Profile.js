import React from "react";

// components

import CardProfile from "../../components/Cards/Profile";
import CardSettings from "../../components/Cards/Settings";


export default function Profile() {
    return (
    <>
    <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-5/12 mb-12 xl:mb-0 px-4">
            <CardProfile />
        </div>
        <div className="w-full xl:w-7/12 mb-12 xl:mb-0 px-4">
            <CardSettings />
        </div>
    </div>
    </>
    );
}
