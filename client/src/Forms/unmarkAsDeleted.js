import React, { Component } from 'react';
import { Container, Row, Button, Alert } from 'reactstrap';
import axios from 'axios';

class UnmarkAsDeleted extends Component {

    constructor(props){
        super(props)
        this.state={
            modal: this.props.modal ? this.props.modal : null,
            project: this.props.project ? true : false,
            publication: this.props.publication ? true : false,
            class: this.props.class ? true : false,
            member: this.props.member ? true : false,
        }
        this.handleUnmark = this.handleUnmark.bind(this);
    }

    handleUnmark(id){
        if(this.state.project){
            axios.put(`/api/projects/mark/${id}`, { 
                markAsDeleted: false
                })
                .then(res => {
                if(res.data.success === true){
                    window.location.reload();
                }
                else{
                    console.log("Mark Delete Failed!")
                    console.log(res)
                }
            });
        }

        else if(this.state.publication){
            axios.put(`/api/publications/mark/${id}`, { 
                markAsDeleted: false
                })
                .then(res => {
                if(res.data.success === true){
                    window.location.reload();
                }
                else{
                    console.log("Mark Delete Failed!")
                    console.log(res)
                }
            });
        }

        else if(this.state.class){
            axios.put(`/api/teaching/mark/${id}`, { 
                markAsDeleted: false
                })
                .then(res => {
                if(res.data.success === true){
                    window.location.reload();
                }
                else{
                    console.log("Mark Delete Failed!")
                    console.log(res)
                }
            });
        }

        else if(this.state.member){
            if(this.props.category === "facultyCSU"){ 
                axios.put(`/api/facultyCSU/mark/${id}`, { 
                    markAsDeleted: false
                    })
                    .then(res => {
                    if(res.data.success === true){
                        window.location.reload();
                    }
                    else{
                        console.log("Mark Delete Failed!")
                        console.log(res)
                    }
                });
            }

            else if(this.props.category === "facultyFIU"){ 
                axios.put(`/api/facultyFIU/mark/${id}`, { 
                    markAsDeleted: false
                    })
                    .then(res => {
                    if(res.data.success === true){
                        window.location.reload();
                    }
                    else{
                        console.log("Mark Delete Failed!")
                        console.log(res)
                    }
                });
            }

            else if(this.props.category === "members"){ 
                axios.put(`/api/members/mark/${id}`, { 
                    markAsDeleted: false
                    })
                    .then(res => {
                    if(res.data.success === true){
                        window.location.reload();
                    }
                    else{
                        console.log("Mark Delete Failed!")
                        console.log(res)
                    }
                });
            }

            else if(this.props.category === "affiliated"){ 
                axios.put(`/api/affiliated/mark/${id}`, { 
                    markAsDeleted: false
                    })
                    .then(res => {
                    if(res.data.success === true){
                        window.location.reload();
                    }
                    else{
                        console.log("Mark Delete Failed!")
                        console.log(res)
                    }
                });
            }

            else if(this.props.category === "former"){ 
                axios.put(`/api/former/mark/${id}`, { 
                    markAsDeleted: false
                    })
                    .then(res => {
                    if(res.data.success === true){
                        window.location.reload();
                    }
                    else{
                        console.log("Mark Delete Failed!")
                        console.log(res)
                    }
                });
            }
        }
    }

    render() {
        if(this.state.project){
            return (
                <div>
                    <Container>
                        <Row>
                            <Alert color="danger">You are about to unmark this project as deleted. This project will now show up in non-administrative mode.
                            Are you sure you want to do this?</Alert>
                            <Button color="danger" onClick={() => {this.handleUnmark(this.props.project._id)}}>YES</Button>&nbsp;
                            <Button color="success" id={this.props.toggle}>NO</Button>
                        </Row>
                        <br />
                    </Container>
                </div>
            );
        }

        else if(this.state.publication){
            return (
                <div>
                    <Container>
                        <Row>
                            <Alert color="danger">You are about to unmark this publication as deleted. This publication will now show up in non-administrative mode.
                            Are you sure you want to do this?</Alert>
                            <Button color="danger" onClick={() => {this.handleUnmark(this.props.publication._id)}}>YES</Button>&nbsp;
                            <Button color="success" id={this.props.toggle}>NO</Button>
                        </Row>
                        <br />
                    </Container>
                </div>
            );
        }

        else if(this.state.class){
            return (
                <div>
                    <Container>
                        <Row>
                            <Alert color="danger">You are about to unmark this class as deleted. This class will now show up in non-administrative mode.
                            Are you sure you want to do this?</Alert>
                            <Button color="danger" onClick={() => {this.handleUnmark(this.props.class._id)}}>YES</Button>&nbsp;
                            <Button color="success" id={this.props.toggle}>NO</Button>
                        </Row>
                        <br />
                    </Container>
                </div>
            );
        }

        else if(this.state.member){
            return (
                <div>
                    <Container>
                        <Row>
                            <Alert color="danger">You are about to unmark this member as deleted. This member will now show up in non-administrative mode.
                            Are you sure you want to do this?</Alert>
                            <Button color="danger" onClick={() => {this.handleUnmark(this.props.member._id)}}>YES</Button>&nbsp;
                            <Button color="success" id={this.props.toggle}>NO</Button>
                        </Row>
                        <br />
                    </Container>
                </div>
            );
        }
    }
}

export default UnmarkAsDeleted;