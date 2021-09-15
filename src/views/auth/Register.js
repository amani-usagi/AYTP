import React,{useState} from "react";
import { Link ,useParams, useHistory } from "react-router-dom";
import { API_URL } from "../../config";

export default function Register() {
    let title= "";
    let history = useHistory()
  const AdminRegisterrequest = (email, password) => async (e) => {
    let url = `${API_URL}/admin/register`
    e.preventDefault();
    let query = {
      email: email,
      password: password,
    };
    const headers = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    };

    alert(JSON.stringify(query) + url)
    const response = await fetch(url,headers);
    const data = await response.json();
    alert(JSON.stringify(data));
    history.push("/admin/dashboard")
  };

  let [ email,setEmail] = useState("");
  let [password,setPassword] = useState("");
  let { type } = useParams();
  const handleEmailInput = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  let formSubmittionHandler = () => {
      console.log("default handler is in use")
  };

  switch (type) {
    case "admin":
      title ="Admin Register"
      formSubmittionHandler = AdminRegisterrequest(email, password);
      break;
    
    default:
        title ="Admin Register"
        formSubmittionHandler = AdminRegisterrequest(email, password);
        break;
  }



    return (
    <>
    <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-5/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
                    <div className="rounded-t mb-0 px-6 py-6">
                        <div className="text-center mb-3">
                            <h6 className="text-gray-500 text-sm font-semibold"> Sign up with</h6>
                            {title} with
                        </div>
                        <div className="btn-wrapper text-center">
                            <button className="bg-white active:bg-gray-50 text-gray-700 font-bold px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center text-xs ease-linear transition-all duration-150" type="button">
                                <img alt="..." className="w-5 mr-1" src={require("../../assets/img/github.svg").default} />
                                    Github
                            </button>
                            <button className="bg-white active:bg-gray-50 text-gray-700 font-bold px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center text-xs ease-linear transition-all duration-150" type="button">
                                <img alt="..." className="w-5 mr-1" src={require("../../assets/img/google.svg").default} />
                                    Google
                            </button>
                        </div>
                        <hr className="mt-6 border-b-1 border-gray-300" />
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <div className="text-gray-500 text-center mb-3 font-bold">
                            <small>Or sign up with credentials</small>
                        </div>
                        <form onSubmit={formSubmittionHandler}>
                            
                            <div className="relative w-full mb-3">
                                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="grid-password">
                                    Email
                                </label>
                                <input
                                type="email"
                                onChange={handleEmailInput}
                                className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                placeholder="Email"/>
                            </div>
                            <div className="relative w-full mb-3">
                                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="grid-password">
                                    Password
                                </label>
                                <input 
                                type="password"
                                onChange={handlePasswordInput}
                                className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                placeholder="Password"/>
                            </div>
                            
                            <div>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input id="customCheckRegister" type="checkbox" className="form-checkbox border-0 rounded text-gray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"/>
                                    <span className="ml-2 text-sm font-semibold text-gray-500">
                                        I agree with the{" "}
                                        <a href="#pablo" className="text-blue-500" onClick={(e) => e.preventDefault()}>privacy policy</a>
                                    </span>
                                </label>
                            </div>
                            <div className="text-center mt-6">
                                <button 
                                className="bg-blue-500 hover:bg-blue-900 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" 
                                type="button"
                                onClick={formSubmittionHandler}>
                                
                                    Create Account
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex flex-wrap mt-6 relative justify-center">
                    <Link to="/auth/login" className="italic font-bold">
                        <small className="text-gray-500">Already have an account? </small>
                        <small className="text-blue-500">Sign in</small>
                    </Link>
                </div>

                <div className="flex flex-wrap mt-6 relative justify-center">
                    <Link to="/register/tutor" className="italic font-bold">
                        <small className="text-gray-500">Tutor? </small>
                        <small className="text-blue-500">Register here</small>
                    </Link>
                </div>

                <div className="flex flex-wrap mt-6 relative justify-center">
                    <Link to="/register/student" className="italic font-bold">
                        <small className="text-gray-500">Student? </small>
                        <small className="text-blue-500">Register here</small>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}
