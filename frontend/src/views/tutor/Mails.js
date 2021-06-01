import React from "react";

// components

import CardMail from "../../components/Cards/CardMail";
import CardInbox from "../../components/Cards/CardInbox";

export default function Mail() {
    return (
    <>
    <div className="flex flex-wrap -mt-16">
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
            <CardMail />
        </div>
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
            <CardInbox />
        </div>
    </div>
    </>
    );
}
