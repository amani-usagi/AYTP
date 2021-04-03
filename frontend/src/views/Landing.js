import React from "react";

function Landing() {
    return(
        <div className="leading-normal tracking-normal gradient text-white">
            <nav id="header" className="fixed w-full z-30 top-0 text-white">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                    <div className="pl-4 flex items-center">
                        <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">
                            <svg className="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
                                <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
                                <path className="plane-take-off" d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "/>
                            </svg> Logo
                        </a>
                    </div>
                    <div className="block lg:hidden pr-4">
                        <button id="nav-toggle" className="flex items-center p-1 text-blue-900 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-white p-4 lg:p-0 z-20" id="nav-content">
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex lg:ml-32 space-x-4 space-y-2 font-bold">
                                <a href="/home" className="text-white hover:text-gray-900 px-3 pb-2 pt-4 rounded-md text-sm transform transition hover:scale-110 duration-300 ease-in-out">Home</a>
                                <a href="/explore" className="text-white hover:text-gray-900 px-3 py-2 rounded-md text-sm transform transition hover:scale-110 duration-300 ease-in-out">Explore</a>
                                <a href="/courses" className="text-white hover:text-gray-900 px-3 py-2 rounded-md text-sm transform transition hover:scale-110 duration-300 ease-in-out">Courses</a>
                                <a href="/forum" className="text-white hover:text-gray-900 px-3 py-2 rounded-md text-sm transform transition hover:scale-110 duration-300 ease-in-out">Forum</a>
                            </div>
                        </div>
                        <ul className="list-reset lg:flex justify-end flex-1 font-bold items-center">
                            <li className="mr-2"><a className="inline-block text-white no-underline hover:text-gray-900 transform transition hover:scale-110 duration-300 ease-in-out py-2 px-4" href="/">Login</a></li>
                            <li className="mr-2"><a className="inline-block text-white no-underline hover:text-gray-900 transform transition hover:scale-110 duration-300 ease-in-out py-2 px-4" href="/">Get Started</a></li>
                        </ul>
                    </div>
                </div>
                <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
            </nav>
            <div className="pt-24">
                <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                        <p className="uppercase font-bold tracking-loose w-full">Every mind yearns to learn</p>
                        <h1 className="my-4 text-5xl font-bold leading-tight">Main Hero Message to sell yourself!</h1>
                        <p className="leading-normal italic text-2xl mb-8">Sub-hero message, not too long and not too short. Make it just right!</p>
                        <div className="flex justify-items-center items-center space-x-10 py-5 ">
                            <button className="mx-auto bg-white hover:bg-black text-black hover:text-white font-bold my-6 py-2 px-6 focus:shadow-md transform transition hover:scale-110 duration-300 ease-in-out cursor-pointer">
                                View Courses
                            </button>
                            <button className=" mx-auto bg-transparent hover:bg-white text-white font-bold hover:text-black my-6 py-2 px-6 border border-white border-bold hover:border-transparent focus:shadow-md transform transition hover:scale-110 duration-300 ease-in-out cursor-pointer">
                                Get Started
                            </button>
                        </div> 
                    </div>
                    <div className="w-full md:w-3/5 py-6 text-center">
                        <img className="w-full md:w-4/5 z-50 lg:mx-20" src={process.env.PUBLIC_URL + "/assets/img/hero.png"} alt=""/>
                    </div>
                </div>
            </div>
            <div className="relative -mt-12 lg:-mt-24">
                <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                            <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
                            <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
                        </g>
                        <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
                        </g>
                    </g>
                </svg>
            </div>
            <section className="bg-white border-b py-8">
                <div className="container max-w-5xl mx-auto m-8">
                    <h1 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">Choose your course</h1>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded"></div>
                    </div>
                    <div className="flex flex-wrap">
                        <p className="text-gray-500 mb-8 text-base">
                            Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum interdum dui, ac tempor lorem convallis ut
                        </p>
                    </div>
                    <div className="w-full mx-auto bg-gray-50 shadow-lg p-10 text-gray-800 relative overflow-hidden resize-x min-w-80 max-w-3xl" x-data="app()" x-init="generatePassword()">
                        <div className="relative mt-1">
                            <input type="text" id="password" className="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Search..."></input>
                            <button className="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors"><i className="mdi mdi-magnify"></i></button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gray-100">
                <div className="container mx-auto flex flex-wrap pt-4 pb-12">
                    <h1 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">Carousel</h1>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded"></div>
                    </div>
                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                            <a href="/" className="flex flex-wrap no-underline hover:no-underline">
                                <p className="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
                                <div className="w-full font-bold text-xl text-gray-800 px-6">
                                    Lorem ipsum dolor sit amet.
                                </div>
                                <p className="text-gray-800 text-base px-6 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</p>
                            </a>
                        </div>
                        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                            <div className="flex items-center justify-start">
                                <button className="mx-auto lg:mx-0 gradient text-white font-bold my-6 py-2 px-8 shadow-sm focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                    Action
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                            <a href="/" className="flex flex-wrap no-underline hover:no-underline">
                                <p className="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
                                <div className="w-full font-bold text-xl text-gray-800 px-6">
                                    Lorem ipsum dolor sit amet.
                                </div>
                                <p className="text-gray-800 text-base px-6 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</p>
                            </a>
                        </div>
                        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                            <div className="flex items-center justify-start">
                                <button className="mx-auto lg:mx-0 gradient text-white font-bold my-6 py-2 px-8 shadow-sm focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                    Action
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                            <a href="/" className="flex flex-wrap no-underline hover:no-underline">
                                <p className="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
                                <div className="w-full font-bold text-xl text-gray-800 px-6">
                                    Lorem ipsum dolor sit amet.
                                </div>
                                <p className="text-gray-800 text-base px-6 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</p>
                            </a>
                        </div>
                        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                            <div className="flex items-center justify-start">
                                <button className="mx-auto lg:mx-0 gradient text-white font-bold my-6 py-2 px-8 shadow-sm focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                    Action
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
			<section className="gradient">

            </section>
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
        </div>
    )
}
export default Landing;