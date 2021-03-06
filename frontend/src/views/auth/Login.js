import React,{useState} from "react";
import { API_URL } from "../../config";
import { Link ,useParams, useHistory } from "react-router-dom";
import TransNavbar from "../../components/Navbars/TransNavbar";
import TransFooter from "../../components/Footers/TransFooter";
import { storeTokens } from "../../services/authenticationService";

export default function Login() {
   let title= "";
   let history = useHistory()
  const AdminLoginrequest = (email, password) => async (e) => {
    let url = `${API_URL}/auth/login`
    e.preventDefault();
    let query = {
      email: email,
      password: password,
      role:'ADMIN'
    };
    const headers = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    };

    try{
      const response = await fetch(url,headers);
      const data = await response.json();
      alert(data.message);
      
      var astatus = (data.status);
      if (astatus === 0 ){
        storeTokens(data.access_token,data.refresh_token)
        history.push("/admin/dashboard")
      }
      else{
        history.push("/login/admin")
      }
    }catch(err){
      console.log(err)
    }
  };

  const TutorLoginrequest = (email, password) => async (e) => {
    let url = `${API_URL}/auth/login`
    e.preventDefault();
    let query = {
      email: email,
      password: password,
      role:'TUTOR'
    };
    const headers = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    };
    try{
      const response = await fetch(url,headers);
      const data = await response.json();
      alert(JSON.stringify(data));
      
      var tstatus = (data.status);
      if (tstatus === 0 ){
        storeTokens(data.access_token,data.refresh_token)
        history.push("/tutor/dashboard")
      }
      else{
        history.push("/login/tutor")
      }
    }catch(err){
      console.log(err)
    }
  };

  const StudentLoginrequest = (email, password) => async (e) => {

    let url = `${API_URL}/auth/login`
    e.preventDefault();
    let query = {
      email: email,
      password: password,
      role:'STUDENT'
    };
    const headers = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    };

    try{
      const response = await fetch(url,headers);
      const data = await response.json();
      alert(JSON.stringify(data));
        history.push("/tutor/dashboard")
      
      var sstatus = (data.status);
      if (sstatus === 0 ){
        storeTokens(data.access_token,data.refresh_token)
        history.push("/student/dashboard")
      }
      else{
        history.push("/login/student")
      }}
      catch(err){
        console.log(err)
      }

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
      title ="Admin Login"
      formSubmittionHandler = AdminLoginrequest(email, password);
      break;
    case "tutor":
      title ="Tutor Login"
      formSubmittionHandler = TutorLoginrequest(email, password);
      break;
    case "student":
      title ="Student Login"
      formSubmittionHandler = StudentLoginrequest(email, password);
      break;
    default:
      title ="Student Login"
      formSubmittionHandler = StudentLoginrequest(email, password);
      break;
  }

  return (
    <>
    <TransNavbar />
    <main>
    <section className="relative w-full h-full py-40 min-h-screen">
    <div className="absolute top-0 w-full h-full bg-white bg-no-repeat bg-full" style={{ backgroundImage: "url(" + require("../../assets/img/authback.svg").default + ")", }}></div>

      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-gray-500 text-sm font-semibold">
                    {title} with
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                  <button
                    className="bg-white active:bg-gray-50 text-gray-700 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                      src={require("../../assets/img/github.svg").default}
                    />{" "}
                    Github
                  </button>
                  <button
                    className="bg-white active:bg-gray-50 text-gray-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                      src={require("../../assets/img/google.svg").default}
                    />{" "}
                    Google
                  </button>
                </div>
                <hr className="mt-6 border-b-1 border-gray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-gray-400 text-center mb-3 font-bold">
                  <small>Or sign in with credentials</small>
                </div>
                <form onSubmit={formSubmittionHandler}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block  text-gray-600 text-sm font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      onChange={handleEmailInput}
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block  text-gray-600 text-sm font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      onChange={handlePasswordInput}
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-gray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-gray-500">
                        {" "}
                        Remember me{" "}
                      </span>
                    </label>
                  </div>
                  <div className="text-center mt-6">
                    <button
                    onClick={formSubmittionHandler}
                      className="bg-blue-500 hover:bg-blue-900 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-blue-500 italic font-bold"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link
                  to="/auth/register"
                  className="text-blue-500 italic font-bold"
                >
                  <small>Create new account!</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

        </section>
    </main>
    <TransFooter />
    </>
  );
}
