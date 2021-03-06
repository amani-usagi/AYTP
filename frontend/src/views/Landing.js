import React from "react";

import Navbar from "../components/Navbars/NavBar";
import TransFooter from "../components/Footers/TransFooter";

export default function Landing() {
    return(
        < >
        <Navbar />
            <div className="h-screen pb-14 bg-right bg-cover">
                <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
                        <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Main Hero Message to sell your app</h1>
                        <p className="leading-normal italic text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">Sub-hero message, not too long and not too short. Make it just right!</p>
                        <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">Download our app:</p>
                        <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
                            <img src={require("../assets/img/App Store.svg").default}  alt="..." className="h-12 pr-4 bounce-top-icons" />
                            <img src={require("../assets/img/Play Store.svg").default}  alt="..." className="h-12 bounce-top-icons" />
                        </div>
                    </div>
                    <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
                        <img className="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src={require("../assets/img/devices.svg").default}  alt="..."/>
                    </div>
                </div>
            </div>
        <TransFooter />
    </>
    );
}
