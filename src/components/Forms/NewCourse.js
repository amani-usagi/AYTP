import React, { Component } from "react";
import satoken from "../../views/auth/login";



class NewCourse extends Component {
    state = {
        coursename: "",
        courseno: "",
        about: "",
    };

    handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('http://localhost:4000/tutor/create/course', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json, text/plain, */*',
            'Authorization': satoken ,
          },
          body: JSON.stringify({ 
              'coursename':this.state.coursename,
              'courseno':this.state.courseno,
              'about':this.state.about,
           }),
        });
        const body = await response.text();
        
        this.setState({ responseToPost: body });
        
      };

    render() {
        return (
            <div className="relative flex flex-col bg-gray-50 min-w-0 break-words mb-6 shadow-lg rounded">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-gray-700 text-xl font-bold">Add Course</h6>
                    </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form  onSubmit={this.handleSubmit}>
                        <div className="flex flex-wrap">
                            <div className="w-full px-1">
                                <div className="relative w-full mb-3 pt-2">
                                    <label className="block uppercase text-gray-500 text-xs font-bold mb-2" htmlFor="grid-password">
                                        Course Name
                                    </label>
                                    <input type="text" name="coursename" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={this.state.coursename} onChange={(event) => this.setState({coursename: event.target.value})}/>
                                </div>
                            </div>
                            <div className="w-full px-1">
                                <div className="relative w-full mb-3 pt-2">
                                    <label className="block uppercase text-gray-500 text-xs font-bold mb-2" htmlFor="grid-password">
                                        Course Number
                                    </label>
                                    <input type="number" name="courseno" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={this.state.courseno} onChange={(event) => this.setState({courseno: event.target.value})}/>
                                </div>
                            </div>
                            <div className="w-full px-1">
                                <div className="relative w-full mb-3 pt-2">
                                    <label className="block uppercase text-gray-500 text-xs font-bold mb-2" htmlFor="grid-password">
                                        About
                                    </label>
                                    <textarea type="number" name="courseno" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={this.state.about} onChange={(event) => this.setState({about: event.target.value})}/>
                                </div>
                            </div>
                        </div>
                        <button className="bg-blue-500 text-white active:bg-blue-500 font-bold text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="submit">
                            <i className="fa fa-plus mr-2" aria-hidden="true"></i>Add
                        </button>
                    </form>
                    <p>{this.state.responseToPost}</p>
                </div>
            </div>
        );
    }
}

export default NewCourse;