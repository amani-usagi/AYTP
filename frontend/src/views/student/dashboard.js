import React from "react";

// components

import CardTask from "../../components/Cards/CardTask";
import CardCourses from '../../components/Cards/CardNewCourse'
import CardEnrolledCourses from "../../components/Cards/CardEnrolledCourses";

export default function Dashboard() {
    return (
    <>
    <div className="flex flex-wrap -mt-16">
        <div className="w-full xl:w-9/12 mb-12 xl:mb-0 px-4">
            <CardTask />
        </div>
        <div className="w-full xl:w-9/12 mb-12 xl:mb-0 px-4">
            <CardEnrolledCourses />
        </div>
        <div className="w-full xl:w-9/12 mb-12 xl:mb-0 px-4">
            <CardCourses>
                
            </CardCourses>
        </div>
    </div>
    </>
    );
}
