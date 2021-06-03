import React from "react";

// components

import CardEnrolledCourses from "../../components/Cards/CardEnrolledCourses";
import CardSettings from "../../components/Cards/CardSettings";


export default function Schools() {
    return (
    <>
    <div className="flex flex-wrap -mt-16">
        <div className="w-full xl:w-8/12 mb-12 px-4">
            <CardEnrolledCourses />
        </div>
        <div className="w-full lg:w-4/12 mb-12 px-4">
            <CardSettings />
        </div>
    </div>
    </>
    );
}
