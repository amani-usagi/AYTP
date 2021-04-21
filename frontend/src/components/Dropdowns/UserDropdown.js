import React from "react";
import { createPopper } from "@popperjs/core";
import { Link } from "react-router-dom";

const UserDropdown = () => {
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start",
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };
    return (
        <>
        <a className="text-gray-500 block" href="/" ref={btnDropdownRef} onClick={(e) => { e.preventDefault(); dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();}}>
            <div className="items-center flex">
                <span className="w-12 h-12 text-sm text-white bg-gray-200 inline-flex items-center justify-center rounded-full">
                    <img alt="..." className="w-full rounded-full align-middle border-none shadow-lg"  src={require("../../assets/img/bprofile.svg").default}/>
                </span>
            </div>
        </a>
        <div ref={popoverDropdownRef} className={(dropdownPopoverShow ? "block " : "hidden ") + "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"}>
            <Link className="text-sm py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent text-gray-700" to="/profile">
                <i className="fas fa-user-circle mr-2 text-sm"></i>{" "} Profile
            </Link>
            <a href="/" className={ "text-sm py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent text-gray-700"} onClick={(e) => e.preventDefault()} >
                <i class="fas fa-toolbox mr-2"></i> Action
            </a>
            <a href="/" className={ "text-sm py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent text-gray-700"} onClick={(e) => e.preventDefault()} >
                <i class="fa fa-cog mr-2" aria-hidden="true"></i> Settings
            </a>
            <div className="h-0 my-2 border border-solid border-gray-100" />
                <a href="/" className={ "text-sm py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent text-gray-700"} onClick={(e) => e.preventDefault()} >
                    <i class="fa fa-power-off mr-2" aria-hidden="true"></i> Sign Out
                </a>
            </div>
        </>
    );
}
export default UserDropdown;