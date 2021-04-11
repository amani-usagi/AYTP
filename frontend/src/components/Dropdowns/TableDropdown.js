import React from "react";
import { createPopper } from "@popperjs/core";

const TableDrop = () => {
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
                <span className="w-12 h-12 text-sm text-gray-500 bg-gray-200 inline-flex items-center justify-center rounded-full">
                    <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                </span>
            </div>
        </a>
        <div ref={popoverDropdownRef} className={(dropdownPopoverShow ? "block " : "hidden ") + "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"}>
            <a href="/" className={ "text-sm py-2 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-gray-500 hover:text-blue-500"} onClick={(e) => e.preventDefault()}>
                <i className="fa fa-envelope mr-2" aria-hidden="true"></i>something@mail.com
            </a>
            <a href="/" className={ "text-sm py-2 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-gray-500 hover:text-blue-500"} onClick={(e) => e.preventDefault()} >
                <i className="fa fa-phone mr-2" aria-hidden="true"></i> +254 712 345678
            </a>
            <div className="h-0 my-2 border border-solid border-gray-100" />
                <a href="/" className={ "text-sm py-2 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-gray-500 hover:text-blue-500"} onClick={(e) => e.preventDefault()} >
                    <i className="fa fa-toggle-off mr-2" aria-hidden="true"></i> Flag
                </a>
            </div>
        </>
    );
}
export default TableDrop;