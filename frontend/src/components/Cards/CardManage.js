import React from 'react';


export default function CardManage(props) {
    return(
        <>
        <div className= "relative flex flex-col bg-white min-w-0 break-words w-full mb-6 shadow-lg rounded " >
            <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                        <h3 className= "font-semibold text-lg " >
                            Admins
                        </h3>
                    </div>
                </div>
            </div>
		    <div className="block w-full overflow-x-auto">
                <table className="items-center w-full bg-white border-collapse">
                    <thead>
                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Name
                        </th>
                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Email
                        </th>
                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Last Login
                        </th>
                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Action
                        </th>
                    </thead>
                    <tbody>
                        {props.children} 
                        {/* fetch and render the table (child) */}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
};