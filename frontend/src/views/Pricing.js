import React from 'react';

import Navbar from "../components/Navbars/Navbar";
import TransFooter from "../components/Footers/TransFooter";

export default function Pricing() {
    return(
        <>
        <Navbar />
        <div className="relative py-20 block max-w-5xl mx-auto h-500-px" >
            <div className="text-center my-10">
                <h1 className="font-bold text-3xl mb-2">Select a plan </h1>
            </div>
            <div className="flex flex-col md:flex-row px-2 md:px-0">
                <div className="w-full md:w-1/3 bg-gray-100 rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 md:mr-6 mb-10 md:mb-0">
                    <h3 className="text-gray-900 text-lg">Basic</h3>
                    <p className="text-gray-900 mt-1"><span className="font-bold text-black text-4xl">$69</span> /Month (Billed annually)</p>
                    <p className="text-sm text-gray-900 mt-2">For most businesses that want to optimize web queries.</p>
                    <div className="text-sm text-gray-900 mt-4">
                        <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1 text-green-500"></span> All limited links</p>
                        <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1 text-green-500"></span> Own analytics platform</p>
                        <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1 text-green-500"></span> Chat support</p>
                        <p className="my-2"><span className="fa fa-times-circle mr-2 ml-1 text-red-500"></span> Optimize hashtags</p>
                        <p className="my-2"><span className="fa fa-times-circle mr-2 ml-1 text-red-500"></span> Unlimited users</p>
                    </div>
                    <button className="w-full text-white border bg-blue-500 rounded hover:bg-blue-800 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-2 mt-4">Choose Plan</button>
                </div>
                <div className="w-full md:w-1/3 text-white bg-blue-500 rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 md:mr-6 mb-10 md:mb-0">
                    <h3 className="text-lg">Professional</h3>
                    <p className="mt-1"><span className="font-bold text-4xl">$99</span> /Month (Billed annually)</p>
                    <p className="text-sm mt-2">For most businesses that want to optimize web queries.</p>
                    <div className="text-sm mt-4">
                        <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1 text-green-500 bg-white rounded-full"></span> All limited links</p>
                        <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1 text-green-500 bg-white rounded-full"></span> Own analytics platform</p>
                        <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1 text-green-500 bg-white rounded-full"></span> Chat support</p>
                        <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1 text-green-500 bg-white rounded-full"></span> Optimize hashtags</p>
                        <p className="my-2"><span className="fa fa-times-circle mr-2 ml-1 text-red-500 bg-white rounded-full"></span> Unlimited users</p>
                    </div>
                    <button className="w-full text-blue-500 bg-white rounded hover:opacity-100 hover:shadow-xl transition duration-150 ease-in-out py-2 mt-4">Choose Plan</button>
                </div>
                <div className="w-full md:w-1/3 bg-gray-100 rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 mb-10 md:mb-0">
                    <h3 className="text-gray-900 text-lg">Enterprise</h3>
                    <p className="text-gray-900 mt-1"><span className="font-bold text-black text-4xl">$299</span> /Month (Billed annually)</p>
                    <p className="text-sm text-gray-900 mt-2">For most businesses that want to optimize web queries.</p>
                    <div className="text-sm text-gray-900 mt-4">
                        <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1 text-green-500"></span> All limited links</p>
                        <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1 text-green-500"></span> Own analytics platform</p>
                        <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1 text-green-500"></span> Chat support</p>
                        <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1 text-green-500"></span> Optimize hashtags</p>
                        <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1 text-green-500"></span> Unlimited users</p>
                    </div>
                    <button className="w-full text-white border bg-blue-500 rounded hover:bg-blue-800 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-2 mt-4">Choose Plan</button>
                </div>
            </div>
        </div>
        <TransFooter />
        </>
    );
}