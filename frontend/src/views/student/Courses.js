import React from "react";

// components

import CardProfile from "../../components/Cards/CardProfile";
import CardSettings from "../../components/Cards/CardSettings";


export default function Schools() {
    return (
    <>
    <div className="flex flex-wrap mt-4">
        <div className="w-5/12 mb-12 px-4">
            <CardProfile />
        </div>
        <div className="w-7/12 mb-12 px-4">
            <CardSettings />
        </div>
    </div>
    </>
    );
}
