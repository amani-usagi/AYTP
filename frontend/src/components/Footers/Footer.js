import React from "react";

function Footer() {
    return(
        <footer className="bg-gray-100">
            <div className="container mx-auto px-8">
                <div className="w-full flex flex-col md:flex-row py-6">
                    <div className="flex-1 mb-6 text-black">
                        <a className="text-blue-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">
                            <svg className="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
                                <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
                                <path className="plane-take-off" d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "/>
                            </svg> Logo
                        </a>
                        <p className="text-gray-500 italic py-8">
                            Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio eget lacus tempus pulvinar.
                        </p>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-blue-600 md:mb-6 font-bold text-xl">Quick Menu</h3>
                        <ul className="list-reset mb-6 ">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="/" className="no-underline text-gray-600 italic hover:text-blue-600">Home</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="/" className="no-underline text-gray-600 italic hover:text-blue-600">About us</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="/" className="no-underline text-gray-600 italic hover:text-blue-600">Explore</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="/" className="no-underline text-gray-600 italic hover:text-blue-600">Testimonials</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="/" className="no-underline text-gray-600 italic hover:text-blue-600">Contacts</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-blue-600 md:mb-6 font-bold text-xl">Useful Links</h3>
                        <ul className="list-reset mb-6 ">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="/" className="no-underline text-gray-600 italic hover:text-blue-600">Courses</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="/" className="no-underline text-gray-600 italic hover:text-blue-600">Events</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="/" className="no-underline text-gray-600 italic hover:text-blue-600">News</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="/" className="no-underline text-gray-600 italic hover:text-blue-600">Schools</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="/" className="no-underline text-gray-600 italic hover:text-blue-600">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-blue-600 md:mb-6 font-bold text-xl">Contact us</h3>
                        <div className="grid grid-cols-1 divide-y divide-blue-600 space-y-2">
                            <div className="cursor-pointer">
                                <h5 className="font-medium text-blue-600">Address:</h5>
                                <p className="text-gray-400 hover:text-blue-600 italic">1481 Creekside Lane Avila Beach, CA 93424</p>
                            </div>
                            <div className="cursor-pointer pt-2">
                                <h5 className="font-medium text-blue-600">Phone:</h5>
                                <p className="text-gray-400 hover:text-blue-600">+53 345 7953 32453</p>
                            </div>
                            <div className="cursor-pointer pt-2">
                                <h5 className="font-medium text-blue-600">Email:</h5>
                                <p className="text-gray-400 hover:text-blue-600">yourmail@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>																	
            </div>
            <div className="flex justify-center bg-gray-200 pb-5" id="copyright">
                <p className="float-left mt-4 max-w-2xl text-lg font-semibold text-gray-500 lg:mx-auto italic">Copyright &copy; 2021 - All rights reserved - <a href="/" target="_blank">Learning</a></p>
                <p className="mt-4 max-w-2xl text-lg font-semibold text-blue-600 lg:mx-auto float-right italic">Learning: <a href="/" target="_blank" title="Online student interaction Platform">Online Learning</a></p>
            </div>
        </footer>
    )
}