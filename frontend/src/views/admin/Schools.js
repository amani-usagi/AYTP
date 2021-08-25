import React from "react";

// components

import CardSchools from "../../components/Cards/Schools";

export default function Schools() {
    return (
    <>
    <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
            <CardSchools />
        </div>
    </div>
    </>
    );
}
