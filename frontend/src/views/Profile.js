import React from "react";

import FooterMini from "../components/Footers/FooterMini";
import Background from "../assets/img/background.svg";
import Navbar from "../components/Navbars/NavBar";

function Profile() {
    return(
        <>
        <Navbar />
            <main className="profile-page">
                <section className="relative pt-96 block h-500-px">
                    <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: "url(" + {Background} + ")",}}>
                        <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
                        <img src={require("../assets/img/background.svg").default} alt=""/>
                    </div>
                    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: "translateZ(0)" }}>
                        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                            <polygon className="text-gray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                </section>
                <section className="relative py-16 bg-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64 lg:w-4/12">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                        <div className="relative">
                                            <img alt="..." src={require("../assets/img/profile.jpg").default} className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"/>
                                        </div>
                                    </div>
                                    <div className="w-full px-4 lg:order-1">
                                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                            <div className="mr-4 p-3 text-center border-r-2"> 
                                                <span className="text-xl font-bold block uppercase tracking-wide text-gray-600"> 10 </span>
                                                <span className="text-sm text-gray-500">  Courses </span>
                                            </div>
                                            <div className="mr-4 p-3 text-center border-r-2">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-gray-600"> 3 </span>
                                                <span className="text-sm text-gray-500"> Schools  </span>
                                            </div>
                                            <div className="lg:mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-gray-600"> 89 </span>
                                                <span className="text-sm text-gray-500"> Pendimg </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-12">
                                    <h3 className="text-2xl font-semibold leading-normal text-gray-700 mb-2"> Jane Doe </h3>
                                    <div className="text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold ">
                                        <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                                        Nairobi, Kenya
                                    </div>
                                    <div className="mb-2 text-gray-600 mt-10">
                                        <i className="fas fa-briefcase mr-2 text-lg text-gray-400"></i>
                                        UX/UI Designer - AYTP Project
                                    </div>
                                    <div className="mb-2 text-gray-600">
                                        <i className="fas fa-university mr-2 text-lg text-gray-400"></i>
                                        Strathmore University
                                    </div>
                                </div>
                                <div className="mt-10 py-10 border-t border-gray-200 text-center">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <p className="mb-4 text-lg leading-relaxed text-gray-700">
                                                An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes,
                                                performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An
                                                artist of considerable range.
                                            </p>
                                            <a href="#action" className="font-normal text-blue-500" onClick={(e) => e.preventDefault()}> <i className="fas fa-edit mr-2"></i>Edit Profile</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        <FooterMini />
        </>
    );
}
export default Profile;
