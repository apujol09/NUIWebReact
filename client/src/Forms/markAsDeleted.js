import React, { Component } from 'react';
import { Container, Row, Button, Alert } from 'reactstrap';
import axios from 'axios';

class MarkAsDeleted extends Component {

    constructor(props){
        super(props)
        this.state={
            modal: this.props.modal ? this.props.modal : null,
            project: this.props.project ? true : false,
            publication: this.props.publication ? true : false,
            class: this.props.class ? true : false,
            member: this.props.member ? true : false,
        }
        this.handleMark = this.handleMark.bind(this);
    }

    handleMark(id){
        if(this.state.project){
            axios.put(`/api/projects/mark/${id}`, { 
                markAsDeleted: true
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
                markAsDeleted: true
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
                markAsDeleted: true
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
            console.log("I'm in!")
            if(this.props.category === "facultyCSU"){ 
                console.log("I'm in facultyCSU!")
                axios.put(`/api/facultyCSU/mark/${id}`, { 
                    markAsDeleted: true
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
                console.log("I'm in facultyFIU!") 
                axios.put(`/api/facultyFIU/mark/${id}`, { 
                    markAsDeleted: true
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
                console.log("I'm in members!")
                axios.put(`/api/members/mark/${id}`, { 
                    markAsDeleted: true
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
                console.log("I'm in affiliated!")
                axios.put(`/api/affiliated/mark/${id}`, { 
                    markAsDeleted: true
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
                console.log("I'm in former!")
                axios.put(`/api/former/mark/${id}`, { 
                    markAsDeleted: true
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
                            <Alert color="danger">You are about to mark this project as deleted. This project won't show up in non-administrative mode.
                            Are you sure you want to do this?</Alert>
                            <Button color="danger" onClick={() => {this.handleMark(this.props.project._id)}}>YES</Button>&nbsp;
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
                            <Alert color="danger">You are about to mark this publication as deleted. This publication won't show up in non-administrative mode.
                            Are you sure you want to do this?</Alert>
                            <Button color="danger" onClick={() => {this.handleMark(this.props.publication._id)}}>YES</Button>&nbsp;
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
                            <Alert color="danger">You are about to mark this class as deleted. This class won't show up in non-administrative mode.
                            Are you sure you want to do this?</Alert>
                            <Button color="danger" onClick={() => {this.handleMark(this.props.class._id)}}>YES</Button>&nbsp;
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
                            <Alert color="danger">You are about to mark this member as deleted. This member won't show up in non-administrative mode.
                            Are you sure you want to do this?</Alert>
                            <Button color="danger" onClick={() => {this.handleMark(this.props.member._id)}}>YES</Button>&nbsp;
                            <Button color="success" id={this.props.toggle}>NO</Button>
                        </Row>
                        <br />
                    </Container>
                </div>
            );
        }
    }
}

export default MarkAsDeleted;