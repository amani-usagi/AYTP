import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
    <>
    <div id="sidebar" className="h-screen w-16 menu bg-white text-white px-4 flex items-center nunito fixed shadow">
        <ul className="list-reset ">
            <li className="my-2 md:my-0">
                <Link className={ "block py-1 md:py-3 pl-1 align-middle " + (window.location.href.indexOf("/home") !== -1 ? "text-blue-500 hover:text-blue-500" : "text-gray-700 hover:text-gray-500") } to="/home">
                    <i className={ "fas fa-home mr-3 text-sm font-bold " + (window.location.href.indexOf("/home") !== -1 ? "" : "text-gray-500") } ></i>
                    <span className="w-full inline-block pt-1 md:pb-0 text-sm font-bold">Home</span>
                </Link>
            </li>
            <li className="my-2 md:my-0">
                <Link className={ "block py-1 md:py-3 pl-1 align-middle " + (window.location.href.indexOf("/student/dashboard") !== -1 ? "text-blue-500 hover:text-blue-500" : "text-gray-700 hover:text-gray-500") } to="/student/dashboard">
                    <i className={ "fas fa-tachometer-alt mr-3 text-sm font-bold " + (window.location.href.indexOf("/student/dashboard") !== -1 ? "" : "text-gray-500") } ></i>
                    <span className="w-full inline-block pt-1 md:pb-0 text-sm font-bold">Dashboard</span>
                </Link>
            </li>
            <li className="my-2 md:my-0">
                <Link className={ "block py-1 md:py-3 pl-1 align-middle " + (window.location.href.indexOf("/student/courses") !== -1 ? "text-blue-500 hover:text-blue-500" : "text-gray-700 hover:text-gray-500") } to="/student/courses">
                    <i className={ "fa fa-tasks	 mr-3 text-sm font-bold " + (window.location.href.indexOf("/student/courses") !== -1 ? "" : "text-gray-500") } ></i>
                    <span className="w-full inline-block pt-1 md:pb-0 text-sm font-bold">Courses</span>
                </Link>
            </li>
            <li className="my-2 md:my-0">
                <Link className={ "block py-1 md:py-3 pl-1 align-middle " + (window.location.href.indexOf("/student/mail") !== -1 ? "text-blue-500 hover:text-blue-500" : "text-gray-700 hover:text-gray-500") } to="/student/mail">
                    <i className={ "fas fa-envelope mr-3 text-sm font-bold " + (window.location.href.indexOf("/student/mail") !== -1 ? "" : "text-gray-500") } ></i>
                    <span className="w-full inline-block pt-1 md:pb-0 text-sm font-bold">Mails</span>
                </Link>
            </li>
            <li className="my-2 md:my-0">
                <Link className={ "block py-1 md:py-3 pl-1 align-middle " + (window.location.href.indexOf("/student/payment") !== -1 ? "text-blue-500 hover:text-blue-500" : "text-gray-700 hover:text-gray-500") } to="/student/payment">
                    <i className={ "fa fa-wallet mr-3 text-sm font-bold " + (window.location.href.indexOf("/student/payment") !== -1 ? "" : "text-gray-500") } ></i>
                    <span className="w-full inline-block pt-1 md:pb-0 text-sm font-bold">Payments</span>
                </Link>
            </li>
            <hr className="my-4 md:min-w-full" />
            <li className="my-2 md:my-0">
                <Link className={ "block py-1 md:py-3 pl-1 align-middle " + (window.location.href.indexOf("/student/profile") !== -1 ? "text-blue-500 hover:text-blue-500" : "text-gray-700 hover:text-gray-500") } to="/student/profile">
                    <i className={ "fa fa-user mr-3 text-sm font-bold " + (window.location.href.indexOf("/student/profile") !== -1 ? "" : "text-gray-500") } ></i>
                    <span className="w-full inline-block pt-1 md:pb-0 text-sm font-bold">Profile</span>
                </Link>
            </li>
            <hr className="my-4 md:min-w-full" />
            <li className="my-2 md:my-0">
                <Link className={ "block py-1 md:py-3 pl-1 align-middle " + (window.location.href.indexOf("/student/logout") !== -1 ? "text-blue-500 hover:text-blue-500" : "text-gray-700 hover:text-gray-500") } to="/student/logout">
                    <i className={ "fa fa-power-off mr-3 text-sm font-bold " + (window.location.href.indexOf("/student/logout") !== -1 ? "" : "text-red-500") } ></i>
                    <span className="w-full inline-block pt-1 md:pb-0 text-sm font-bold">Sign Out</span>
                </Link>
            </li>
        </ul>
    </div>
    </>
    );
}
