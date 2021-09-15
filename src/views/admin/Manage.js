import React from "react";

// components

import AdminManage from "../../components/Cards/AdminManage";

export default function Manage() {
    return (
    <>
    <div className="flex flex-wrap">
        <div className="w-full xl:w-full mb-12 xl:mb-0 px-4">
            <AdminManage />
        </div>
    </div>
    </>
    );
}
