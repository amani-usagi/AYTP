
import React from "react";
import { Link } from "react-router-dom";

export default function TransNavbar(props) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
    <>
    <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <Link className="text-blue-900 text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap " to="/">
                    Elearn Site
                </Link>
                <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" onClick={() => setNavbarOpen(!navbarOpen)}>
                    <i className="text-blue-900 fas fa-bars"></i>
                </button>
            </div>
            <div className={"lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" + (navbarOpen ? " block rounded shadow-lg" : " hidden")} id="example-navbar-warning" >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                    <li className="flex items-center">
                        <a className="hover:text-gray-700 text-black px-3 py-4 lg:py-2 flex items-center text-xs  font-bold" href="/" target="_blank" >
                            <i className="fa fa-home text-lg leading-lg " />
                            <p  className="text-sm inline-block ml-2">Home</p>
                        </a>
                    </li>
                    <li className="flex items-center">
                        <Link className="hover:text-gray-900 text-gray-500 px-3 py-4 lg:py-2 flex items-center text-xs  font-bold" to="/admin/dashboard"  >
                            <p className="text-sm inline-block ml-2">Admin</p>
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <Link className="hover:text-gray-900 text-gray-500 px-3 py-4 lg:py-2 flex items-center text-xs  font-bold" to="/student/index" >
                            <p className=" text-sm inline-block ml-2">Students</p>
                        </Link>
                    </li>
                    <li className="flex items-center border-r-2 border-black">
                        <Link to="/auth/login" className="hover:text-gray-900 text-gray-500 px-3 py-4 lg:py-2 flex items-center text-xs font-bold">
                            <i className="fas fa-sign-in-alt mr-2"></i> Sign In
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <Link to="/auth/register" className="hover:text-gray-900 text-gray-500 px-3 py-4 lg:py-2 flex items-center text-xs  font-bold">
                            <i className="fa fa-user-plus mr-2" aria-hidden="true"></i>Register
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
    );
}
