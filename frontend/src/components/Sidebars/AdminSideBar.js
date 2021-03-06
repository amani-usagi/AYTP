import React from "react";
import { Link } from "react-router-dom";

import NotificationDropdown from "../Dropdowns/Notification";
import UserDropdown from "../Dropdowns/UserDropdown";

export default function Sidebar() {
    const [collapseShow, setCollapseShow] = React.useState("hidden");
    return (
    <>
    <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
            <button className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent" type="button" onClick={() => setCollapseShow("bg-white m-2 py-3 pl-6  px-6")}>
                <i className="fas fa-bars"></i>
            </button>
            <Link className="md:block text-left md:pb-2 text-gray-500 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0" to="/admin/dashboard">
                Administrator
            </Link>
            <ul className="md:hidden items-center flex flex-wrap list-none">
                <li className="inline-block relative">
                    <NotificationDropdown />
                </li>
                <li className="inline-block relative">
                    <UserDropdown />
                </li>
            </ul>
            <div className={ "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " + collapseShow }>
                <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-200">
                    <div className="flex flex-wrap">
                        <div className="w-6/12">
                            <Link className="md:block text-left md:pb-2 text-gray-500 mr-0 inline-block whitespace-nowrap text-sm  font-bold p-4 px-0" to="/admin/dashboard">
                                Administrator
                            </Link>
                        </div>
                        <div className="w-6/12 flex justify-end">
                            <button type="button" className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent" onClick={() => setCollapseShow("hidden")}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <form className="mt-6 mb-4 md:hidden">
                    <div className="mb-3 pt-0">
                        <input type="text" placeholder="Search..." className="border-0 px-3 py-2 h-12 border-solid  border-gray-500 placeholder-gray-300 text-gray-500 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"/>
                    </div>
                </form>
                <hr className="my-4 md:min-w-full" />
                <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                    <li className="my-2 md:my-0">
                        <Link className={ "flex items-center py-3 pl-6  text-xs font-semibold " + (window.location.href.indexOf("/admin/dashboard") !== -1 ? "text-blue-500 hover:text-blue-500" : "text-gray-700 hover:text-gray-500") } to="/admin/dashboard">
                            <i className={ "fas fa-tachometer-alt mr-2 text-sm " + (window.location.href.indexOf("/admin/dashboard") !== -1 ? "opacity-75" : "text-gray-500") } ></i>{" "}
                            Dashboard
                        </Link>
                    </li>
                    <li className="my-2 md:my-0">
                        <Link className={ "flex items-center py-3 pl-6  text-xs font-semibold " + (window.location.href.indexOf("/admin/schools") !== -1 ? "text-blue-500 hover:text-blue-500" : "text-gray-700 hover:text-gray-500") } to="/admin/schools">
                            <i className={ "fas fa-school mr-2 text-sm " + (window.location.href.indexOf("/admin/schools") !== -1 ? "opacity-75" : "text-gray-500") } ></i>{" "}
                                Schools
                        </Link>
                    </li>
                    <li className="my-2 md:my-0">
                        <Link className={ "flex items-center py-3 pl-6  text-xs font-semibold " + (window.location.href.indexOf("/admin/mail") !== -1 ? "text-blue-500 hover:text-blue-500" : "text-gray-700 hover:text-gray-500") } to="/admin/mail">
                            <i className={ "fa fa-envelope mr-2 text-sm " + (window.location.href.indexOf("/admin/mail") !== -1 ? "opacity-75" : "text-gray-500") } ></i>{" "}
                            Mails
                        </Link>
                    </li>
                    <li className="my-2 md:my-0">
                        <Link className={ "flex items-center py-3 pl-6  text-xs font-semibold " + (window.location.href.indexOf("/admin/manage") !== -1 ? "text-blue-500 hover:text-blue-500" : "text-gray-700 hover:text-gray-500") } to="/admin/manage">
                            <i className={ "fa fa-tools mr-2 text-sm " + (window.location.href.indexOf("/admin/manage") !== -1 ? "opacity-75" : "text-gray-500") } ></i>{" "}
                            Manage
                        </Link>
                    </li>
                </ul>
                <hr className="my-4 md:min-w-full" />
                <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                    <li className="my-2 md:my-0">
                        <Link className={ "flex items-center py-3 pl-6  text-xs font-semibold " + (window.location.href.indexOf("/admin/profile") !== -1 ? "text-blue-500 hover:text-blue-500" : "text-gray-700 hover:text-gray-500") } to="/admin/profile">
                            <i className={ "fas fa-user mr-2 text-sm " + (window.location.href.indexOf("/admin/profile") !== -1 ? "opacity-75" : "text-gray-500") } ></i>{" "}
                            Profile
                        </Link>
                    </li>
                    <li className="my-2 md:my-0">
                        <Link className={ "flex items-center py-3 pl-6  text-xs font-semibold " + (window.location.href.indexOf("/admin/settings") !== -1 ? "text-blue-500 hover:text-blue-500"  : "text-gray-700 hover:text-gray-500") } to="/admin/settings" >
                            <i className={ "fas fa-cog mr-2 text-sm " + (window.location.href.indexOf("/admin/settings") !== -1 ? "opacity-75" : "text-gray-500") } ></i>{" "}
                            Settings
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
    );
}
