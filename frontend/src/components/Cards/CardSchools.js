import React from "react";
import PropTypes from "prop-types";

// components

import TableDropdown from "../Dropdowns/TableDropdown";

export default function CardSchools({ color }) {
	return (
    <>
    <div className={ "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " + (color === "light" ? "bg-white" : "bg-blue-900 text-white") } >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          	<div className="flex flex-wrap items-center">
            	<div className="relative w-full px-4 max-w-full flex-grow flex-1">
					<h3 className={ "font-semibold text-lg " + (color === "light" ? "text-gray-700" : "text-white") } >
						Schools
					</h3>
            	</div>
        	</div>
    	</div>
		<div className="block w-full overflow-x-auto">
			<table className="items-center w-full bg-transparent border-collapse">
				<thead>
					<tr>
						<th className={ "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-gray-50 text-gray-500 border-gray-100" : "bg-blue-800 text-blue-300 border-blue-700") } >
							School Name
						</th>
						<th className={ "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-gray-50 text-gray-500 border-gray-100" : "bg-blue-800 text-blue-300 border-blue-700") } >
							Billing
						</th>
						<th className={ "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-gray-50 text-gray-500 border-gray-100" : "bg-blue-800 text-blue-300 border-blue-700") } >
							Status
						</th>
						<th className={ "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-gray-50 text-gray-500 border-gray-100" : "bg-blue-800 text-blue-300 border-blue-700") } >
							Owner(s)
						</th>
						<th className={ "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-gray-50 text-gray-500 border-gray-100" : "bg-blue-800 text-blue-300 border-blue-700") } >
							Traffic Per Day
						</th>
						<th className={ "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-gray-50 text-gray-500 border-gray-100" : "bg-blue-800 text-blue-300 border-blue-700") } >
							Actions
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
							<img src={require("../../assets/img/bprofile.svg").default} className="h-12 w-12 bg-white rounded-full border" alt="..." ></img>{" "}
							<span className={ "ml-3 font-bold " + + (color === "light" ? "text-gray-600" : "text-white") } >
									Argon Design School
							</span>
						</th>
						<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
							$2,500 USD
						</td>
						<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
							<i className="fas fa-circle text-red-500 mr-2"></i> Pending
						</td>
						<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
							<div className="flex">
								<img src={require("../../assets/img/bprofile.svg").default} alt="..." className="w-10 h-10 rounded-full border-2 border-gray-50 shadow"></img>
								<img src={require("../../assets/img/bprofile.svg").default} alt="..." className="w-10 h-10 rounded-full border-2 border-gray-50 shadow"></img>
								<img src={require("../../assets/img/bprofile.svg").default} alt="..." className="w-10 h-10 rounded-full border-2 border-gray-50 shadow"></img>
							</div>
						</td>
						<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
							<div className="flex items-center">
								<span className="mr-2">60%</span>
								<div className="relative w-full">
									<div className="overflow-hidden h-2 text-xs flex rounded bg-yellow-200">
										<div style={{ width: "60%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500" ></div>
									</div>
								</div>
							</div>
						</td>
						<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
							<TableDropdown />
						</td>
					</tr>
					<tr>
						<th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
							<img src={require("../../assets/img/bprofile.svg").default} className="h-12 w-12 bg-white rounded-full border" alt="..." ></img>{" "}
							<span className={ "ml-3 font-bold " + + (color === "light" ? "text-gray-600" : "text-white") } >
								Angular Design School
							</span>
						</th>
						<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
							$1,500 USD
						</td>
						<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
							<i className="fas fa-circle text-green-500 mr-2"></i> Completed
						</td>
						<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
							<div className="flex">
								<img src={require("../../assets/img/bprofile.svg").default} alt="..." className="w-10 h-10 rounded-full border-2 border-gray-50 shadow"></img>
							</div>
						</td>
						<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
							<div className="flex items-center">
								<span className="mr-2">80%</span>
								<div className="relative w-full">
									<div className="overflow-hidden h-2 text-xs flex rounded bg-green-200">
										<div style={{ width: "80%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500" ></div>
									</div>
								</div>
							</div>
						</td>
						<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
							<TableDropdown />
						</td>
					</tr>
					<tr>
						<th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
							<img src={require("../../assets/img/bprofile.svg").default} className="h-12 w-12 bg-white rounded-full border" alt="..." ></img>{" "}
							<span className={ "ml-3 font-bold " + + (color === "light" ? "text-gray-600" : "text-white") } >
								React Design School
							</span>
						</th>
						<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
							$3,500 USD
						</td>
						<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
							<i className="fas fa-circle text-red-500 mr-2"></i> pending
						</td>
						<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
							<div className="flex">
								<img src={require("../../assets/img/bprofile.svg").default} alt="..." className="w-10 h-10 rounded-full border-2 border-gray-50 shadow"></img>
								<img src={require("../../assets/img/bprofile.svg").default} alt="..." className="w-10 h-10 rounded-full border-2 border-gray-50 shadow"></img>
								<img src={require("../../assets/img/bprofile.svg").default} alt="..." className="w-10 h-10 rounded-full border-2 border-gray-50 shadow"></img>
							</div>
						</td>
						<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
							<div className="flex items-center">
								<span className="mr-2">60%</span>
								<div className="relative w-full">
									<div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
										<div style={{ width: "60%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500" ></div>
									</div>
								</div>
							</div>
						</td>
						<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
							<TableDropdown />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
    </div>
    </>
	);
}

CardSchools.defaultProps = {
  color: "light",
};

CardSchools.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
