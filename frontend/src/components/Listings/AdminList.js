import React from 'react';
import AdminTable from '../Tables/AdminTable';

const AdminList = (props) => {
    console.log(props);

    const deleteAdminHandler = (id) => {
        props.getAdminId(id);
    }
    const renderAdminList = props.admins.map((admins) => {
        return (
            <AdminTable admins={admins} clickHandler={deleteAdminHandler} key={ admins.id }></AdminTable>
        );
    });
    return (
        <div >
            {renderAdminList}
        </div>
    );
};

export default AdminList;
