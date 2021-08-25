import React from "react";

// components

import EnrolledCourses from "../../components/Cards/EnrolledCourses";
import Settings from "../../components/Cards/Settings";


export default function Schools() {
    return (
    <>
    <div className="flex flex-wrap -mt-16">
        <div className="w-full xl:w-8/12 mb-12 px-4">
            <EnrolledCourses />
        </div>
        <div className="w-full lg:w-4/12 mb-12 px-4">
            <Settings />
        </div>
    </div>
    </>
    );
}
