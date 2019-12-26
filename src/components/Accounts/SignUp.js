import React from "react";
const axios = require('axios').default;

class SignUp extends React.Component {
    state = {
        name: "", email: "", password: "", confirm: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var canCreate = false;

        if (this.state.password !== this.state.confirm) {
            alert("Your passwords didn't match!");
        }
        else {
            axios.get("http://localhost:3001/acc")
                .then(res => {
                    const check = res.data.filter(each => {
                        return each.email === this.state.email;
                    })

                    if (check.length === 0) {
                        canCreate = true;
                    }
                    if (canCreate) {
                        axios({
                            method: 'post',
                            url: "http://localhost:3001/acc",
                            data: {
                                name: this.state.name,
                                email: this.state.email,
                                password: this.state.password
                            }
                        }).then(res => {
                            alert("Your account was succesfully created");
                            this.setState({ name: "", email: "", password: "", confirm: "" });
                        })
                    }
                    else {
                        alert("This email is already registered!!")
                    }
                })
        }
    }

    handleChange = (e) => {
        this.setState({ ...this.state, [e.target.id]: e.target.value });
    }

    render() {
        return (
            <div style={{ backgroundColor: "lightCyan", padding: "1px" }}>
                <div style={{ marginTop: "100px" }} className="container">
                    <div style={{ padding: "0px 50px 0px 50px" }} className="row">
                        <div className="col-12">
                            <h5>By creating an account here, you will be able to keep your own to-do list and access it
                anytime, and it's only available to you :D</h5>
                        </div>
                        <div className="col-md-8 col-10">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Your name</label>
                                    <input value={this.state.name} onChange={this.handleChange} type="name" className="form-control" id="name" placeholder="Your name..." />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Your email</label>
                                    <input value={this.state.email} onChange={this.handleChange} type="email" className="form-control" id="email" placeholder="Your email..." />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input value={this.state.password} onChange={this.handleChange} type="password" className="form-control" id="password" placeholder="Your password..." />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirm">Confirm</label>
                                    <input value={this.state.confirm} onChange={this.handleChange} type="password" className="form-control" id="confirm" placeholder="Confirm password..." />
                                </div>
                                <button style={{ marginBottom: "40px" }} type="submit" className="col-5 col-md-3 offset-4 btn btn-primary text-center">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;