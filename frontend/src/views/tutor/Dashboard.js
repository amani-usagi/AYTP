import React from "react";

// components

import CardDash from "../../components/Cards/CardDash";

export default function Dashboard() {
    return (
    <>
    <div className="flex flex-wrap">
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
            <CardDash />
        </div>
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
            <CardDash />
        </div>
    </div>
    </>
    );
}
