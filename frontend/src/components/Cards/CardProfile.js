import React from "react";

// components

export default function CardProfile() {
	return (
    <>
	<div className="relative flex flex-col min-w-0 break-words bg-gray-50 w-full mb-6 shadow-xl rounded-lg mt-16">
		<div className="flex justify-center -mt-16">
			<img src={require("../../assets/img/profile.jpg").default} className="rounded-full border-solid border-white border-2 -mt-3 w-5/12" alt="..."/>		
		</div>
		<div className="text-center px-3 pb-6 pt-2">
			<h3 className="text-black text-sm bold font-sans">Olivia Dunham</h3>
			<p className="mt-2 font-sans font-light text-grey-dark">Hello, I'm from the other side!</p>
		</div>
		<div className="flex justify-center pb-3 text-grey-dark border-b-2 pr-3">
			<div className="text-center mr-3 border-r-2 pr-3">
				<h2>34</h2>
				<span>Messages</span>
			</div >
			<div className="text-center mr-3 border-r-2 pr-3">
				<h2>10</h2>
				<span>Courses</span>
			</div>
			<div className="text-center mr-3">
				<h2>3</h2>
				<span>Schools</span>
			</div>
		</div>
	</div>
    </>
	);
}
