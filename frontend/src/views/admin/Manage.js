import React from "react";

// components

import CardManage from "../../components/Cards/AdminCards/CardManage";

export default function Manage() {
    return (
    <>
    <div className="flex flex-wrap">
        <div className="w-full xl:w-full mb-12 xl:mb-0 px-4">
            <CardManage />
        </div>
    </div>
    </>
    );
}
