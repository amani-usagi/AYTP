import React from "react";
import { createPopper } from "@popperjs/core";

const NotificationDropdown = () => {
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        console.log("hey");
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
    <a className="text-gray-500 text-2xl block py-1 px-3" href="#action" ref={btnDropdownRef} onClick={(e) => { e.preventDefault();  dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover(); }} >
        <i className="fas fa-bell"></i>
    </a>
    <div ref={popoverDropdownRef} className={(dropdownPopoverShow ? "block " : "hidden ") + "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48" } >
        <a href="#action" className={ "text-sm py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent text-gray-900" } onClick={(e) => e.preventDefault()} >
            <i className="fa fa-envelope mr-2" aria-hidden="true"></i>Messages
        </a>
        <a href="#action" className={ "text-sm py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent text-gray-900" } onClick={(e) => e.preventDefault()} >
            <i className="fa fa-exclamation mr-2" aria-hidden="true"></i>Pending Tasks
        </a>
        <a href="#action" className={ "text-sm py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent text-gray-900" }  onClick={(e) => e.preventDefault()} >
            <i className="fa fa-info-circle mr-2" aria-hidden="true"></i>Another one
        </a>
        <div className="h-0 my-2 border border-solid border-gray-100" />
        <a  href="#action" className={ "text-sm py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent text-gray-900" } onClick={(e) => e.preventDefault()} >
            <i class="fa fa-wrench mr-2" aria-hidden="true"></i>Separate Link
        </a>
    </div>
    </>
  );
};
export default NotificationDropdown;