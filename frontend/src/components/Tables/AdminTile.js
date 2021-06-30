import React from "react";
import profile from '../../assets/img/bprofile.svg';

//components

const AdminTile = (props) => {

const {id, name, email,time} = props.admin;
	return (
    <>
		<tr>
			<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
				<img src={profile} className="h-12 w-12 bg-white rounded-full border" alt="..." ></img>{" "}
				<span className={ "ml-3 font-bold"} >
					{name}
				</span>
			</td>
			<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
				{email}
			</td>
			<td  className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
				{time ?? "3 hours ago"}
			</td>
			<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
				<i className="fa fa-trash text-base" aria-hidden="true" onClick={() => props.removeAdmin(id)} style={{color:"red"}}></i>
			</td>
		</tr>
    </>	
	);
};


export default AdminTile;
