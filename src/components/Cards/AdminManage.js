import React from "react";
import PropTypes from "prop-types";

// components
import TableDropdown from "../Dropdowns/TableDropdown";

export default function AdminManage({ color }) {
	return (
    <>
    <div className={ "relative flex flex-col min-w-0 break-words w-8/12 mb-6 shadow-lg rounded " + (color === "light" ? "bg-white" : "bg-blue-900 text-white") } >
        <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
                <h6 className="text-gray-700 text-xl font-bold">Admins</h6>
            </div>
        </div>
		<div className="block w-full overflow-x-auto">
			<table className="items-center w-full bg-transparent border-collapse">
				<thead>
					<tr>
						<th className={ "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-gray-50 text-gray-500 border-gray-100" : "bg-blue-800 text-blue-300 border-blue-700") } >
							Admin Name
						</th>
						<th className={ "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-gray-50 text-gray-500 border-gray-100" : "bg-blue-800 text-blue-300 border-blue-700") } >
							Status
						</th>
						<th className={ "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-gray-50 text-gray-500 border-gray-100" : "bg-blue-800 text-blue-300 border-blue-700") } >
							Last login
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
									Admin One
							</span>
						</th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
							<i className="fas fa-circle text-gray-500 mr-2"></i> offline
						</td>
						<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
							Today: 3:52 pm
						</td>
						<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
							<TableDropdown />
						</td>
					</tr>
					<tr>
						<th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
							<img src={require("../../assets/img/bprofile.svg").default} className="h-12 w-12 bg-white rounded-full border" alt="..." ></img>{" "}
							<span className={ "ml-3 font-bold " + + (color === "light" ? "text-gray-600" : "text-white") } >
								Admin Two
							</span>
						</th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
							<i className="fas fa-circle text-green-500 mr-2"></i> online
						</td>
						<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
							Today: 4:52 pm
						</td>
						<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
							<TableDropdown />
						</td>
					</tr>
					<tr>
						<th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
							<img src={require("../../assets/img/bprofile.svg").default} className="h-12 w-12 bg-white rounded-full border" alt="..." ></img>{" "}
							<span className={ "ml-3 font-bold " + + (color === "light" ? "text-gray-600" : "text-white") } >
								Admin Three
							</span>
						</th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
							<i className="fas fa-circle text-red-500 mr-2"></i> busy
						</td>
						<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
							Today: 5:10 pm
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

AdminManage.defaultProps = {
  color: "light",
};

AdminManage.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
