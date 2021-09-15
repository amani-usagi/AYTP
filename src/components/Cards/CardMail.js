import React from "react";

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function CardMail() {
    return (
    <>
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
                <h6 className="text-gray-900 text-xl font-bold">Mails</h6>
                <button className="bg-blue-500 text-white hover:bg-blue-900 font-bold text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                    <i class="fa fa-plus mr-2" aria-hidden="true"></i>Compose
                </button>
            </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
                <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                    To :
                </h6>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                Email Address
                            </label>
                            <input type="email" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"  />
                        </div>
                    </div>
                    <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                CC :
                            </label>
                            <input type="email" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"  />
                        </div>
                    </div>
                    <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                Subject :
                            </label>
                            <input type="email" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"  />
                        </div>
                    </div>
                </div>
                <hr className="mt-6 border-b-1 border-gray-300" />
                <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                    Message :
                </h6>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                        <div type="text" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="6">
                            <CKEditor editor={ClassicEditor} />
                        </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className="flex justify-center ">
                <button className="bg-blue-500 text-white hover:bg-blue-900 font-bold text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                    <i class="fa fa-paper-plane mr-2" aria-hidden="true"></i> Send
                </button>
                <button className="bg-red-500 text-white hover:bg-red-700 font-bold text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                    <i class="fa fa-trash mr-2" aria-hidden="true"></i> Discard
                </button>
            </div>
        </div>
    </div>
    </>
    );
}
