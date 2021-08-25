import React from "react";

// components

import Task from "../../components/Cards/Task";
import NewCourse from "../../components/Cards/NewCourse";
import EnrolledCourses from "../../components/Cards/EnrolledCourses";

export default function Dashboard() {
    return (
    <>
    <div className="flex flex-wrap -mt-16">
        <div className="w-full xl:w-9/12 mb-12 xl:mb-0 px-4">
            <Task />
        </div>
        <div className="w-full xl:w-9/12 mb-12 xl:mb-0 px-4">
            <EnrolledCourses />
        </div>
        <div className="w-full xl:w-9/12 mb-12 xl:mb-0 px-4">
            <NewCourse />
        </div>
    </div>
    </>
    );
}
