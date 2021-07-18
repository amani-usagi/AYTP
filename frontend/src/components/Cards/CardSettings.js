import React from "react";

export default function CardSettings() {
    return (
    <>
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-50 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
                <h6 className="text-gray-700 text-xl font-bold">Personal Info</h6>
                <button className="bg-blue-500 text-white active:bg-blue-500 font-bold text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                    <i className="fa fa-plus mr-2" aria-hidden="true"></i>Update
                </button>
            </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
                <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                    User Information
                </h6>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-gray-500 text-xs font-bold mb-2" htmlFor="grid-password">
                                Username
                            </label>
                            <input type="text" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-gray-500 text-xs font-bold mb-2" htmlFor="grid-password">
                                Email address
                            </label>
                            <input type="email" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-gray-500 text-xs font-bold mb-2" htmlFor="grid-password" >
                                First Name
                            </label>
                            <input type="text" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-gray-500 text-xs font-bold mb-2" htmlFor="grid-password" >
                                Last Name
                            </label>
                            <input type="text" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                        </div>
                    </div>
                </div>
                <hr className="mt-6 border-b-1 border-gray-300" />
                <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                    Contact Information
                </h6>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-gray-500 text-xs font-bold mb-2" htmlFor="grid-password">
                                Address
                            </label>
                            <input type="text" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"  />
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-gray-500 text-xs font-bold mb-2" htmlFor="grid-password">
                                City
                            </label>
                            <input type="email" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-gray-500 text-xs font-bold mb-2" htmlFor="grid-password">
                                Country
                            </label>
                            <input type="email" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-gray-500 text-xs font-bold mb-2" htmlFor="grid-password">
                                Postal Code
                            </label>
                            <input type="email" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                        </div>
                    </div>
                </div>
                <hr className="mt-6 border-b-1 border-gray-300" />
                <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                    About Me
                </h6>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-gray-300 text-xs font-bold mb-2" htmlFor="grid-password">
                                Text only
                            </label>
                            <textarea type="text" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="5">
                            </textarea>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    </>
    );
}