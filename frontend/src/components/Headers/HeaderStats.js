import React from "react";

// components

import CardStats from "../Cards/AdminCards/CardStats";

export default function HeaderStats() {
    return (
    <>
      <div className="relative bg-gray-800 md:pt-32 pb-32 pt-12">
            <div className="px-4 md:px-10 mx-auto w-full">
                <div>
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <CardStats statSubtitle="TRAFFIC" statTitle="350,897" statIconName="far fa-chart-bar" statIconColor="bg-red-500" />
                        </div>
                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <CardStats statSubtitle="NEW USERS" statTitle="2,356" statIconName="fas fa-users" statIconColor="bg-blue-500" />
                        </div>
                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <CardStats statSubtitle="TOTAL BILLINGS" statTitle="$ 47,924" statIconName="fas fa-dollar-sign" statIconColor="bg-green-500" />
                        </div>
                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <CardStats statSubtitle="PENDING MESSAGES"  statTitle="49" statIconName="fas fa-envelope" statIconColor="bg-yellow-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}
