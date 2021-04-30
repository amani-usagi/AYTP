import React from "react";

// components

import CardSettings from "../../components/Cards/AdminCards/CardSettings";

export default function Settings() {
    return (
    <>
    <div className="flex flex-wrap">
        <div className="w-full xl:w-full mb-12 xl:mb-0 px-4">
            <CardSettings />
        </div>
    </div>
    </>
    );
}
