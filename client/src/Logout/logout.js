import React, { Component } from 'react';
import { Container, Row, Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
import axios from 'axios';

class Logout extends Component {

    constructor(props) {
        super(props);
        this.state = {
          modal: true
        };
    
        this.toggle = this.toggle.bind(this);
      }

    toggle() {
        this.setState({ modal: !this.state.modal });
        this.props.history.push('/');
        window.location.reload();
      }

      componentDidMount(){
            axios.get(`/api/logout`)
            .then(res =>{
                if(res.data.success === true){
                    console.log("Logout Successful!");
                }
                else{
                    console.log("Logout Failed!");
                }
                
            })
      }

    render() {
        return (
            <div>
                <Container>
                    <Row><br /><br /></Row>
                    <Row>
                        <Modal isOpen={this.state.modal} toggle={this.toggle}>
                            <ModalHeader toggle={this.toggle}>Logout Success!</ModalHeader>
                            <ModalBody>
                                You have been successfully Logged Out! {/*You will be redirected now to the Home Page!*/}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.toggle}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default Logout;