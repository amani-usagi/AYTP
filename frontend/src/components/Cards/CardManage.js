import React from 'react';

import AdminTable from '../Tables/AdminTable';

export default function CardManage() {
    return(
        <div className={ "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " } >
            <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                        <h3 className={ "font-semibold text-lg "} >
                            Admins
                        </h3>
                    </div>
                </div>
            </div>
            <div className="block w-full overflow-x-auto">
                <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                        <tr className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Name
                        </tr>
                        <tr className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Email
                        </tr>
                        <tr className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Last Login
                        </tr>
                        <tr className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Action
                        </tr>
                    </thead>
                    <tbody>
                        <AdminTable />
                    </tbody>
                </table>
            </div>
        </div>
    );
};