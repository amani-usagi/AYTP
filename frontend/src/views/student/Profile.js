import React from "react";

// components

import CardProfile from "../../components/Cards/CardProfile";
import FormSettings from "../../components/Forms/Settings";


export default function Schools() {
    return (
    <>
    <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-5/12 mb-12 xl:mb-0 px-4">
            <CardProfile />
        </div>
        <div className="w-full xl:w-7/12 mb-12 xl:mb-0 px-4">
            <FormSettings />
        </div>
    </div>
    </>
    );
}
