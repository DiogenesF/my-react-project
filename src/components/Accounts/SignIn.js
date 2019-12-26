import React from "react";
import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, Form, Button } from "reactstrap";

const axios = require('axios').default;


class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    handleLogin = (e) => {
        
        e.preventDefault();
        axios.get("http://localhost:3001/acc")
            .then(res => {
                const check = res.data.filter(each => {
                    return each.email === this.state.email && each.password === this.state.password;
                })
                console.log(check.length);
                if (check.length === 1) {
                    alert("Logged in");
                }
                else {
                    alert("The information you entered didn't match any account in our database")
                }
            })
        

    }

    handleChange = (e) => {
        this.setState({ ...this.state, [e.target.id]: e.target.value });
    }

    render() {
        return (
            <Modal isOpen={this.props.isModalOpen} toggle={() => this.props.toggleModal()}>
                <ModalHeader toggle={() => this.props.toggleModal()}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="email">Email</Label>
                            <Input onChange={this.handleChange} type="email" id="email" name="email" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input onChange={this.handleChange} type="password" id="password" name="password" />
                        </FormGroup>
                        <div style={{ textAlign: "center" }}>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>
        );
    }
}

export default SignIn;