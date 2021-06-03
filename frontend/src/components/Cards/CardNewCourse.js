import React from 'react';

const CardNewCourse = (props) => {

    const {id, coursename, courseno, about} = props.courses;
    return(
        <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0 ">
            <div className="rounded-t bg-gray-100 mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                    <h6 className="text-gray-900 text-xl font-bold">New Courses</h6>
                </div>
            </div>
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 px-4">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                    <div className="p-3 mr-4 text-white bg-red-500 rounded-full dark:text-orange-100 dark:bg-orange-500">
                        <i className="fa fa-tasks text-xl" aria-hidden="true"></i>
                    </div>
                    <div>
                        <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-400"> {coursename}</p>
                        <span>{courseno}</span>
                        <p className="text-sm font-normal text-gray-600 dark:text-gray-200"> {about} </p>
                    </div>
                    <i className="fa fa-trash" aria-hidden="true" onClick={() => props.clickHandler(id)} style={{color: "red"}}></i>
                </div>
            </div>
        </div>
        </>
    );
}

export default CardNewCourse;