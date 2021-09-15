import React from "react";

// components

import CardStudentStats from "../Cards/StudentStats";

export default function StudentHeader() {
    return (
    <>
      <div className="relative bg-blue-600 md:pt-32 pb-32 pt-12">
            <div className="mx-auto w-full">
                <div>
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <CardStudentStats statSubtitle="MESSAGES" statTitle="13" statIconName="far fa-envelope" statIconColor="bg-red-500" />
                        </div>
                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <CardStudentStats statSubtitle="TASKS" statTitle="5" statIconName="fas fa-list-ol" statIconColor="bg-blue-500" />
                        </div>
                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <CardStudentStats statSubtitle="TOTAL BILLINGS" statTitle="$ 924" statIconName="fas fa-dollar-sign" statIconColor="bg-green-500" />
                        </div>
                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <CardStudentStats statSubtitle="CALENDAR"  statTitle= {new Date().getFullYear()} statIconName="fas fa-calendar-alt" statIconColor="bg-yellow-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}
