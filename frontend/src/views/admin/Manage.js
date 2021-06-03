import React, { useState, useEffect } from "react";
import { uuid } from 'uuidv4';

// components

import AddAdmin from "../../components/Forms/AddAdmin";
import CardManage from '../../components/Cards/CardManage';
import AdminTable from "../../components/Tables/AdminTable";

 function Manage() {

    const LOCAL_STORAGE_KEY = "Admins";
    const [admins, setAdmins] = useState([]);

    const addAdminHandler = (admin) => {
        console.log(admin);
        setAdmins([...admins, {id: uuid(), ...admin}]);
    };

    const removeAdminHandler = (id) => {
		const newAdminList = admins.filter((admin) => {
			return admin.id !== id;
		});
		setAdmins(newAdminList);
	};

    useEffect(() => {
		const retriveAdmins = JSON.parse(localStorage.getItem( LOCAL_STORAGE_KEY));
		if (retriveAdmins) setAdmins(retriveAdmins);
	}, []);

	useEffect(() => {
		localStorage.setItem( LOCAL_STORAGE_KEY, JSON.stringify(admins));
	}, [admins]);

    return (
    <>
    <div className="flex flex-wrap ">
        <div className="w-full xl:w-7/12 mb-12 xl:mb-0 px-4">
            <CardManage>
                {admins.map((a)=>{
                   return <AdminTable admin={a} removeAdmin={removeAdminHandler} />
                })}
            </CardManage>
        </div>
        <div className="w-full xl:w-5/12 mb-12 xl:mb-0 px-4">
            <AddAdmin addAdminHandler={addAdminHandler}/>
        </div>
    </div>
    </>
    );
}

export default Manage;