import React from 'react';

class AddAdmin extends React.Component {
    state = {
        name: "",
        email: "",
    };

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === "" ) {
            alert("Please fill the empty fields!");
            return
        };
        this.props.addAdminHandler(this.state);
        this.setState( {name: "", email: "" } );
    };
    render() {
        return (
            <div className="relative flex flex-col bg-gray-50 min-w-0 break-words mb-6 shadow-lg rounded">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-gray-700 text-xl font-bold">Add Admin</h6>
                    </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form onSubmit={this.add}>
                        <div className="flex flex-wrap">
                            <div className="w-full px-1">
                                <div className="relative w-full mb-3 pt-2">
                                    <label className="block uppercase text-gray-500 text-xs font-bold mb-2" htmlFor="grid-password">
                                        Name
                                    </label>
                                    <input type="text" name="name" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
                                </div>
                            </div>
                            <div className="w-full px-1">
                                <div className="relative w-full mb-3 pt-2">
                                    <label className="block uppercase text-gray-500 text-xs font-bold mb-2" htmlFor="grid-password">
                                        Email
                                    </label>
                                    <input type="email" name="email" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
                                </div>
                            </div>
                        </div>
                        <button className="bg-blue-500 text-white active:bg-blue-500 font-bold text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="submit">
                            <i className="fa fa-plus mr-2" aria-hidden="true"></i>Add
                        </button>
                    </form>
                </div>
            </div>
        );
    };
};

export default AddAdmin;