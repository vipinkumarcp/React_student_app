import React, { Component } from "react";
export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "upshot@upshot.com", password: "upshot", message: "" };
    }
    render() {
        return (
            <div className="col-lg-9">
                <h4 className="m-1 p-2 border-bottom">Login</h4>
                <div className="form-group form-row">
                    <label className="col-lg-4">Email:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.email}
                        onChange={(event) => {
                            this.setState({ email: event.target.value });
                            console.log(this.state.email);
                        }}
                    />
                </div>
                <div className="form-group form-row">
                    <label className="col-lg-4">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        value={this.state.password}
                        onChange={(event) => {
                            this.setState({ password: event.target.value });
                        }}
                    />
                </div>
                <div>
                    <button className="btn btn-primary" onClick={this.onLoginClick} >
                        Login
                    </button>
                </div>
                            <h4>{this.state.message}</h4>
                <div >
                </div>
            </div>
        );
    }
    onLoginClick = () => {
        console.log(this.state);
    }; onLoginClick = () => {
        console.log(this.state);
        if (
            this.state.email === "upshot@upshot.com" &&
            this.state.password === "upshot"
        ) {
            this.setState({
                message: <span className="text-success">Successfully Logged-in
                </span>,
            });
        } else {
            this.setState({
                message: (
                    <span className="text-danger">Invalid login, please try again</span>
                ),
            });
        }
    };
}
