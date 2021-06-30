import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";

// components

import CardSchools from "../../components/Cards/CardSchools";

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
