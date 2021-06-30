import React from 'react';

export default function CardNewCourse (props) {
    return(
        <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0 ">
            <div className="rounded-t bg-white mb-3 px-6 py-6">
                <div className="text-center flex justify-between">
                    <h6 className="text-gray-900 text-xl font-bold">New Courses</h6>
                </div>
            </div>
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3 px-4">
                {props.children}
            </div>
        </div>
        </>
    );
};
