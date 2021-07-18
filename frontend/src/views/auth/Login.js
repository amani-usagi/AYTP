import React, { Component } from "react";
import { Link } from "react-router-dom";

class App extends Component {
    state = {
      response: '',
      post: '',
      responseToPost: '',
      email:'',
      password:'',
      role:'',
    };
    
    componentDidMount() {
      this.callApi()
        .then(res => this.setState({ response: res.express }))
        .catch(err => console.log(err));
    }
    
    callApi = async () => {
      const response = await fetch();
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      
      return body;
    };

    
    handleSubmit = async e => {
      e.preventDefault();
      const response = await fetch('http://localhost:4000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json, text/plain, */*',
        },
        body: JSON.stringify({ 
            'email':this.state.email,
            'password':this.state.password,
            'role':this.state.role,
         }),
      });
      const body = await response.text();
      
      this.setState({ responseToPost: body });
      
    };
    
  render() {
    return (
    <>
    <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
                    <div className="rounded-t mb-0 px-6 py-6">
                        <div className="text-center mb-3">
                            <h6 className="text-gray-500 text-sm font-semibold"> Sign in with</h6>
                        </div>
                        <div className="btn-wrapper text-center">
                            <button className="bg-white active:bg-gray-50 text-gray-700 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
                                <img alt="..." className="w-5 mr-1" src={require("../../assets/img/github.svg").default}/> Github
                            </button>
                            <button className="bg-white active:bg-gray-50 text-gray-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
                                <img alt="..." className="w-5 mr-1" src={require("../../assets/img/google.svg").default}/> Google
                            </button>
                        </div>
                        <hr className="mt-6 border-b-1 border-gray-300" />
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <div className="text-gray-400 text-center mb-3 font-bold">
                            <small>Or sign in with credentials</small>
                        </div>
                        <p>{this.state.response}</p>
                        <form onSubmit={this.handleSubmit}>
                            <div className="relative w-full mb-3">
                                <label className="block  text-gray-600 text-sm font-bold mb-2" htmlFor="grid-password">
                                    Email
                                </label>
                                <input type="email"  value={this.state.email} onChange={e => this.setState({ email: e.target.value })} className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email"  />
                            </div>
                            <div className="relative w-full mb-3">
                                <label className="block  text-gray-600 text-sm font-bold mb-2" htmlFor="grid-password" >
                                    Password
                                </label>
                                <input type="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })}   className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Password" />
                            </div>
                            <div className="relative w-full mb-3">
                                <label className="block  text-gray-600 text-sm font-bold mb-2" htmlFor="grid-password" >
                                    Role
                                </label>
                                <input type="text"  value={this.state.role} onChange={e => this.setState({ role: e.target.value })} className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Role" />
                            </div>
                            <div>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input id="customCheckLogin" type="checkbox" className="form-checkbox border-0 rounded text-gray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150" />
                                    <span className="ml-2 text-sm font-semibold text-gray-500"> Remember me </span>
                                </label>
                            </div>
                            <div className="text-center mt-6">
                                <button className="bg-blue-500 hover:bg-blue-900 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="submit">
                                    Sign In
                                </button>
                            </div>
                        </form>
                        <p>{this.state.responseToPost}</p>
                    </div>
                </div>
                <div className="flex flex-wrap mt-6 relative">
                    <div className="w-1/2">
                        <a href="#pablo" onClick={(e) => e.preventDefault()} className="text-blue-500 italic font-bold" >
                            <small>Forgot password?</small>
                        </a>
                    </div>
                    <div className="w-1/2 text-right">
                        <Link to="/auth/register" className="text-blue-500 italic font-bold">
                            <small>Create new account!</small>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}
}
export default App;