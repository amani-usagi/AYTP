import React from "react";
import { Link } from "react-dom";

function SignUp() {
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img className="mx-auto h-12 w-auto" src={process.env.PUBLIC_URL + "/assets/img/logos.svg"} alt="Elearn"/>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign Up
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        <Link href="/auth/SignIn" className="font-medium text-blue-600 hover:text-blue-500">
                            Already have an account?
                        </Link>
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="true"></input>
                    <div className="rounded-md shadow-sm space-y-0">
                        <div className="py-1">
                            <label for="f-name" className="sr-only">First Name</label>
                            <input id="f-name" name="fname" type="text" autoComplete="off" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="First Name"></input>
                        </div>
                        <div className="py-1">
                            <label for="l-name" className="sr-only">Last Name</label>
                            <input id="l-name" name="lname" type="text" autoComplete="off" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Last Name"></input>
                        </div>
                        <div className="py-1">
                            <label for="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Email: example@mail.com"></input>
                        </div>
                        <div className="py-1">
                            <label for="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" autoComplete="off" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Password"></input>
                        </div>
                        <div className="py-1">
                            <label for="cpassword" className="sr-only">Confirm Password</label>
                            <input id="cpassword" name="cpassword" type="password" autoComplete="off" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Confirm Password"></input>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-blue-500 group-hover:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                </svg>
                            </span>
                            Sign up
                        </button>
                    </div>
                    <div className="flex mt-7 items-center text-center justify-between">
                        <hr className="border-gray-300 border-1 w-full rounded-md"/>
                        <label className="block font-medium text-sm text-gray-500 w-full">
                            or continue with
                        </label>
                        <hr className="border-gray-300 border-1 w-full rounded-md"/>
                    </div>
                    <div className="flex mt-7 justify-center w-full">
                        <button className="mr-5 border border-gray-200 px-4 py-2 rounded-lg cursor-pointer text-black shadow-sm hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                            Facebook
                        </button>
                        <button class="border border-gray-200 px-4 py-2 rounded-lg cursor-pointer text-black shadow-sm hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                            Google
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SignUp;