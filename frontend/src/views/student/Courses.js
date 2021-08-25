import React from "react";

// components

import Enrolled from "../../components/Cards/EnrolledCourses";

export default function Schools() {
    return (
    <>
    <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
            <Enrolled />
        </div>
    </div>
    </>
    );
}
