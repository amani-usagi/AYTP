import React from "react";

// components

import LineChart from "../../components/Cards/LineChart";
import BarChart from "../../components/Cards/BarChart";

function DashBoard() {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                    <LineChart />
                </div>
                <div className="w-full xl:w-4/12 px-4">
                    <BarChart />
                </div>
            </div>
        </>
    );
}
export default DashBoard;