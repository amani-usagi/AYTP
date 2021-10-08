import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { API_URL } from "../../config";
import { getUserToken } from "../../services/authenticationService";

export default function CreateCourse() {
  //let title = ""
  let history = useHistory();
  const TutorCourseCreate = (name, price, description, key) => async (e) => {
    let url = `${API_URL}/tutor/create/course`;
    e.preventDefault();
    let query = {
      name: name,
      price: price,
      description: description,
      key: key,
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
      history.push("/tutor/dashboard");
    } else {
      history.push("/tutor/course");
    }
  };

  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [description, setDescription] = useState("");
  let [key, setKey] = useState("");
  let { type } = useParams();
  const handleNameInput = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handlePriceInput = (e) => {
    e.preventDefault();
    setPrice(e.target.value);
  };

  const handleDescriptionInput = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const handleKeyInput = (e) => {
    e.preventDefault();
    setKey(e.target.value);
  };

  let formSubmittionHandler = () => {
    console.log("default handler is in use");
  };

  switch (type) {
    case "tutor":
      //title = "Create Course";
      formSubmittionHandler = TutorCourseCreate(name, price, description, key);
      break;

    default:
      //title = "Create Course";
      formSubmittionHandler = TutorCourseCreate(name, price, description, key);
      break;
  }
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-50 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-gray-700 text-xl font-bold">
              Create New Course
            </h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={formSubmittionHandler}>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-500 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Course name"
                    onChange={handleNameInput}
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4"></div>
              <div className="w-full lg:w-6/12 px-4"></div>
              <div className="w-full lg:w-6/12 px-4"></div>
            </div>
            <hr className="mt-6 border-b-1 border-gray-300" />
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-500 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    placeholder="Course Price"
                    onChange={handlePriceInput}
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-500 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Key
                  </label>
                  <input
                    type="text"
                    placeholder="Course Key"
                    onChange={handleKeyInput}
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4"></div>
              <div className="w-full lg:w-4/12 px-4"></div>
            </div>
            <hr className="mt-6 border-b-1 border-gray-300" />
            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              Description
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <input
                    type="text"
                    placeholder="Course descriptio"
                    onChange={handleDescriptionInput}
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    rows="5"
                  ></input>

                  <button
                    className="bg-blue-500 text-white active:bg-blue-500 font-bold text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={formSubmittionHandler}
                  >
                    <i className="fa fa-plus mr-2" aria-hidden="true"></i>Create
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
