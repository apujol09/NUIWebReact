import React, { Component } from 'react';
import { Container, Row, Button, Modal, ModalBody, ModalFooter, ModalHeader, Alert } from 'reactstrap';
import axios from 'axios';

class Delete extends Component {

    constructor(props){
        super(props)
        this.state={
            modal: this.props.modal ? this.props.modal : null,
            project: this.props.project ? true : false,
            publication: this.props.publication ? true : false,
            class: this.props.class ? true : false,
            member: this.props.member ? true : false,
        }
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(id){
        if(this.state.project){
            axios.delete(`/api/projects/${id}`).then(res => {
                if(res.data.success === true){
                    window.location.reload();
                }
                else{
                    console.log("Delete Failed!")
                    console.log(res)
                }
            });
        }

        else if(this.state.publication){
            axios.delete(`/api/publications/${id}`).then(res => {
                if(res.data.success === true){
                    window.location.reload();
                }
                else{
                    console.log("Delete Failed!")
                    console.log(res)
                }
            });
        }

        else if(this.state.class){
            axios.delete(`/api/teaching/${id}`).then(res => {
                if(res.data.success === true){
                    window.location.reload();
                }
                else{
                    console.log("Delete Failed!")
                    console.log(res)
                }
            });
        }

        /* I'LL LEAVE IT HERE FOR NOW!!!!!
        else if(this.state.member){
            axios.delete(`/api/member/${this.state.member._id}`).then(res => {
                if(res.data.success === true){
                    console.log(`Delete of item ${id} Successful!`)
                    this.props.history.push('/projects');
                }
                else{
                    console.log("Delete Failed!")
                    console.log(res)
                }
            });
        }
        */
    }

    render() {
        if(this.state.project){
            return (
                <div>
                    <Container>
                        <Row>
                            <Alert color="danger">You are about to permanently delete an item from the Database. Are you sure you want to do this?</Alert>
                            <Button color="danger" onClick={() => {this.handleDelete(this.props.project._id)}}>YES</Button>{'      '}
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
                            <Alert color="danger">You are about to permanently delete an item from the Database. Are you sure you want to do this?</Alert>
                            <Button color="danger" onClick={() => {this.handleDelete(this.props.publication._id)}}>YES</Button>{'      '}
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
                            <Alert color="danger">You are about to permanently delete an item from the Database. Are you sure you want to do this?</Alert>
                            <Button color="danger" onClick={() => {this.handleDelete(this.props.class._id)}}>YES</Button>{'      '}
                            <Button color="success" id={this.props.toggle}>NO</Button>
                        </Row>
                        <br />
                    </Container>
                </div>
            );
        }
    }
}

export default Delete;