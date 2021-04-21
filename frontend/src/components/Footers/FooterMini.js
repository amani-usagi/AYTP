import React from "react";

export default function FooterMini() {
    return (
    <>
    <footer className="block py-4 bg-gray-200">
        <div className="container mx-auto px-4">
            <hr className="mb-4 border-b-1 border-gray-500" />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-4/12 px-4">
                    <div className="text-sm text-gray-500 font-semibold py-1 text-center md:text-left">
                        Copyright © {new Date().getFullYear()}{" "}
                        <a href="/" className="text-blue-500 hover:text-blue-800 text-sm font-semibold py-1">
                            Elearn
                        </a>
                    </div>
                </div>
                <div className="w-full md:w-8/12 px-4">
                    <ul className="flex flex-wrap list-none md:justify-end italic justify-center">
                        <li>
                            <a href="/" className="text-gray-500 hover:text-gray-800 text-sm font-semibold block py-1 px-3">
                                Online Learning Site
                            </a>
                        </li>
                        <li>
                            <a href="/" className="text-gray-500 hover:text-gray-800 text-sm font-semibold block py-1 px-3">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="/" className="text-gray-500 hover:text-gray-800 text-sm font-semibold block py-1 px-3">
                                Our Blog
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </>
    );
}
