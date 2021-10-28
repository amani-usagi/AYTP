import React, { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { getUserToken } from "../../services/authenticationService";

function Courses(props) {
    let EnrolmentID = props.EnrolmentID;
    let CourseID = props.CourseID;
    let CourseName = props.CourseName;
    let CourseDescription = props.CourseDescription;
    return (
      <>              
            
          <table>
        <tr>
            <th>Course EnrolmentID</th>
            <br></br>
            <br></br>
            <th>Course ID</th>
            <br></br>
            <br></br>
            <th>Course Name</th>
            <br></br>
            <br></br>
            <th>Course Description</th>
            <br></br>
            <br></br>
        </tr>
<div className="w-full md:w-1/4 p-3 flex flex-strech">
          <div className="flex flex-col flex-strech w-full h-full">
        <tr>
            <td>
                <p className="text-black text-2xl font-bold text-center my-4"> {EnrolmentID}</p>
            </td>
            
            <td>
                <p className="text-black text-center">{CourseID}</p>
            </td>

            <td>
                <p className="text-black text-center">{CourseName}</p>
            </td>

            <td>
                <p className="text-black text-center">{CourseDescription}</p>
            </td>

        </tr>
            
          </div>
        </div>
        </table>
      </>
    );
  }    

  export default function Mycourses() {
    const [mycourse, setCourse] = useState([]);
    useEffect(() => {
        let url = `${API_URL}/student/mycourses`
    const headers = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Token:getUserToken(),
        },
        };
      fetch(url, headers)
        .then((response) => response.json())
        .then((d) => {
          setCourse(d);
        });
    }, []);


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
                        <p className="text-sm font-normal text-gray-600 dark:text-gray-200" > Details to task two  </p>
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
        <section>
        <div>
          

        {mycourse.map((value, index) =>{
          return (
            <div key={index}>
                {/* {JSON.stringify(value)} */}
                <div>
                    {value.CourseName}
                    {value.CourseDescription}


                </div>
            </div>
          );
        })}

      </div>
    </section>
  
        </>
    );
}
