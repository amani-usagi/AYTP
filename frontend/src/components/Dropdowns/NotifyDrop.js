import React from "react";
import { createPopper } from "@popperjs/core";

const NotifyDrop = () => {
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
        <a className="text-blueGray-500 block py-1 px-3" href="#action" ref={btnDropdownRef} onClick={(e) => { e.preventDefault(); dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover(); }} >
            <i className="fas fa-bell"></i>
        </a>
        <div ref={popoverDropdownRef} className={ (dropdownPopoverShow ? "block " : "hidden ") + "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48" } >
            <a href="#action" className={ "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"} onClick={(e) => e.preventDefault()}>
                Action
            </a>
            <a href="#action" className={ "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" } onClick={(e) => e.preventDefault()} >
                Action 2
            </a>
            <a href="#action" className={ "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" } onClick={(e) => e.preventDefault()} >
                Action 3
            </a>
            <div className="h-0 my-2 border border-solid border-blueGray-100" />
            <a href="#action" className={ "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" } onClick={(e) => e.preventDefault()} >
                Seperated Action
            </a>
        </div>
        </>
    );
};
export default NotifyDrop;