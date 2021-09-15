import React from "react";
import PropTypes from "prop-types";

export default function Inbox({ color }) {
	return (
    <>
    <div className={ "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " + (color === "light" ? "bg-white" : "bg-blue-900 text-white") } >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          	<div className="flex flex-wrap items-center">
            	<div className="relative w-full px-4 max-w-full flex-grow flex-1">
					<h3 className={ "font-semibold text-lg " + (color === "light" ? "text-gray-900" : "text-white") } >
						Inbox
					</h3>
            	</div>
        	</div>
    	</div>
		<div className="block w-full overflow-x-auto">
			<table className="items-center w-full bg-transparent border-collapse">
				<tbody>
					<tr>
						<th></th>
					</tr>
				</tbody>
			</table>
		</div>
    </div>
    </>
	);
}

Inbox.defaultProps = {
  color: "light",
};

Inbox.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
