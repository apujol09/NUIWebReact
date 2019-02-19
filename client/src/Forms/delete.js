import React, { Component } from 'react';
import { Container, Row, Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import axios from 'axios';

class Delete extends Component {

    constructor(props){
        super(props)
        this.state={
            modal: this.props.modal ? true : false,
            project: this.props.project ? true : false,
            publication: this.props.publication ? true : false,
            class: this.props.class ? true : false,
            member: this.props.member ? true : false,
        }
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(id){
        if(this.state.project){
            axios.delete(`/api/projects/${this.state.project._id}`).then(res => {
                if(res.data.success === true){
                    console.log(`Delete of Project ${id} Successful!`)
                    this.props.history.push('/projects');
                }
                else{
                    console.log("Delete Failed!")
                    console.log(res)
                }
            });
        }

        else if(this.state.publication){
            axios.delete(`/api/publications/${this.state.publication._id}`).then(res => {
                if(res.data.success === true){
                    console.log(`Delete of Publication ${id} Successful!`)
                    this.props.history.push('/publications');
                }
                else{
                    console.log("Delete Failed!")
                    console.log(res)
                }
            });
        }

        else if(this.state.class){
            axios.delete(`/api/projects/${this.state.class._id}`).then(res => {
                if(res.data.success === true){
                    console.log(`Delete of Class ${id} Successful!`)
                    this.props.history.push('/projects');
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

    toggle(){
        this.setState({ modal: !this.state.modal })
    }

    render() {
        if(this.state.project){
            return (
                <div>
                    <Container>
                        <Row>
                            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                                <ModalHeader toggle={this.toggle}>WARNING!</ModalHeader>
                                    <ModalBody>
                                        You are about to permanently delete an item from the Database. Are you sure you want to do this?
                                    </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" onClick={() => {this.handleDelete(this.props.project._id)}}>YES</Button>{' '}
                                    <Button color="secondary" onClick={this.toggle}>NO</Button>
                                </ModalFooter>
                            </Modal>
                        </Row>
                    </Container>
                </div>
            );
        }

        else if(this.state.publication){
            return (
                <div>
                    <Container>
                        <Row>
                            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                                <ModalHeader toggle={this.toggle}>WARNING!</ModalHeader>
                                    <ModalBody>
                                        You are about to permanently delete an item from the Database. Are you sure you want to do this?
                                    </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" onClick={() => {this.handleDelete(this.props.publication._id)}}>YES</Button>{' '}
                                    <Button color="secondary" onClick={this.toggle}>NO</Button>
                                </ModalFooter>
                            </Modal>
                        </Row>
                    </Container>
                </div>
            );
        }

        else if(this.state.class){
            return (
                <div>
                    <Container>
                        <Row>
                            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                                <ModalHeader toggle={this.toggle}>WARNING!</ModalHeader>
                                    <ModalBody>
                                        You are about to permanently delete an item from the Database. Are you sure you want to do this?
                                    </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" onClick={() => {this.handleDelete(this.props.class._id)}}>YES</Button>{' '}
                                    <Button color="secondary" onClick={this.toggle}>NO</Button>
                                </ModalFooter>
                            </Modal>
                        </Row>
                    </Container>
                </div>
            );
        }
    }
}

export default Delete;