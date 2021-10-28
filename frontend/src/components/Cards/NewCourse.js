import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { API_URL } from "../../config";
import { getUserToken } from "../../services/authenticationService";

export default function CreateCourse() {
  //let title = ""
  let history = useHistory();
  const StudentCourseEnrol = (courseid) => async (e) => {
    let url = `${API_URL}/student/enrol`;
    e.preventDefault();
    let query = {
        courseid: courseid,
    };
    const headers = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Token: getUserToken(),
      },
      body: JSON.stringify(query),
    };

    alert(JSON.stringify(query) + url);
    const response = await fetch(url, headers);
    const data = await response.json();
    alert(JSON.stringify(data));

    var arstatus = data.status;
    if (arstatus === 0) {
      history.push("/student/courses");
    } else {
      history.push("/student/newcourse");
    }
  };

  let [courseid, setcourseid] = useState("");
  const handleCourseidInput = (e) => {
    e.preventDefault();
    setcourseid(e.target.value);
  };


  let formSubmittionHandler = () => {
    console.log("default handler is in use");
  };
  let { type } = useParams();

  switch (type) {
    case "student":
      //title = "Create Course";
      formSubmittionHandler = StudentCourseEnrol(courseid);
      break;

    default:
        formSubmittionHandler = StudentCourseEnrol(courseid);
        break;
  }

    return(
        <>
        <form onSubmit={formSubmittionHandler}>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0 ">
            <div className="rounded-t bg-gray-100 mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                    <h6 className="text-gray-900 text-xl font-bold">Enroll New Course</h6>
                </div>
            </div>
            
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 px-4">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 cursor-pointer transition duration-100 ease-in-out">
                    <div className="p-3 mr-4 text-white bg-red-500 rounded-full dark:text-orange-100 dark:bg-orange-500">
                        <i className="fa fa-tasks text-xl" aria-hidden="true"></i>
                    </div>
                    <div>
                    <label
                    className="block uppercase text-gray-500 text-xs font-bold mb-2"
                    htmlFor="grid-password">
                    Course ID
                  </label>
                  <input
                    type="number"
                    placeholder="Course ID"
                    onChange={handleCourseidInput}
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                    </div>
                    
                </div>
                
            </div>
            
        </div>

        
        <button
                    className="bg-blue-500 text-white active:bg-blue-500 font-bold text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={formSubmittionHandler}>
                    <i className="fa fa-plus mr-2" aria-hidden="true"></i>Create
                  </button>
        </form>
        </>
    );
}
