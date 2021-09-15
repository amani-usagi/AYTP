import React from 'react';

export default function EnrolledCourse() {
    return(
        <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0">
            <div className="rounded-t bg-gray-100 mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                    <h6 className="text-gray-900 text-xl font-bold">Your Courses</h6>
                </div>
            </div>
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 px-4">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                    <div className="p-3 mr-4 text-white bg-red-500 rounded-full dark:text-orange-100 dark:bg-orange-500">
                        <i className="fa fa-tasks text-xl" aria-hidden="true"></i>
                    </div>
                    <div>
                        <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-400"> Task One </p>
                        <p className="text-sm font-normal text-gray-600 dark:text-gray-200"> Details to task one </p>
                    </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                    <div className="p-3 mr-4 text-white bg-blue-500 rounded-full dark:text-blue-100 dark:bg-blue-500">
                        <i className="fa fa-folder text-xl" aria-hidden="true"></i>
                    </div>
                    <div>
                        <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-400"> Task Three </p>
                        <p className="text-sm font-normal text-gray-600 dark:text-gray-200"> Details to task three </p>
                    </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                    <div className="p-3 mr-4 text-white bg-green-500 rounded-full dark:text-green-100 dark:bg-green-500">
                        <i className="fa fa-folder-open text-xl" aria-hidden="true"></i>
                    </div>
                    <div>
                        <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-400"> Task Two </p>
                        <p className="text-sm font-normal text-gray-600 dark:text-gray-200" > Details to task two </p>
                    </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                    <div className="p-3 mr-4 text-white bg-yellow-500 rounded-full dark:text-teal-100 dark:bg-teal-500">
                        <i className="fas fa-at text-2xl" aria-hidden="true"></i>
                    </div>
                    <div>
                        <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-400"> Task Four </p>
                        <p className="text-sm font-normal text-gray-600 dark:text-gray-200" > Details to taks four </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}