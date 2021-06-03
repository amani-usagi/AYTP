import React from "react";

// components

import CardSchools from "../../components/Cards/CardSchools";

export default function Dashboard() {
    return (
    <>
    <div className="flex flex-wrap">
        <div className="w-full xl:w-full mb-12 xl:mb-0 px-4">
            <CardSchools />
        </div>
    </div>
    <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-full mb-12 xl:mb-0 px-4">
            <CardSchools />
        </div>
    </div>
    </>
    );
}
