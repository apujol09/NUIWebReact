import React, { Component } from 'react';
import './login.css';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Container, Row, Col, Button, Label, Jumbotron, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash} from '@fortawesome/fontawesome-free-solid';
import axios from 'axios';

class LoginForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            passwordVisible: false,
            username: "",
            password: "",
            modal: false
        }
        this.toggleVisiblePassword = this.toggleVisiblePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    toggleVisiblePassword(){
            this.setState({ passwordVisible: !this.state.passwordVisible});
      }

    usernameChange = event =>{
        event.persist();
        this.setState({ username: event.target.value });
      }

    passwordChange = event =>{
        event.persist();
        this.setState({ password: event.target.value });
    }

    
    toggle(){
        this.setState({ modal: !this.state.modal });
    }


    handleSubmit = event => {
        event.preventDefault();

        document.getElementById('LoginFormEmail').value = null;
        document.getElementById('LoginFormPassword').value = null;

        axios.post(`api/login`, { 
            username: this.state.username,
            password: this.state.password
         })
        .then(res => {
            if(res.data.loginSuccess === true){
                console.log("Success!")
                this.props.history.push('/');
                window.location.reload();
            }
            else{
                this.render(
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>Login Attempt Falied</ModalHeader>
                        <ModalBody>
                            Your Username or Password are Incorrect. Please try Again!
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>Close</Button>
                        </ModalFooter>
                    </Modal>
                )
                console.log(res);
                console.log(res.data);
            }
        })
      }

    render() {
        let icon = this.state.passwordVisible ? faEyeSlash : faEye;
        let input_type = this.state.passwordVisible ? "text" : "password";
        return (
            <div>
                <Container>
                    <Row><br /><br /></Row>
                    <Row>
                        <Col md={{size: 6, offset: 3}}>
                            <h1>Administrator Log In</h1>
                            <br />
                        </Col>
                    </Row>
                     <Row>
                         <Col sm="6">
                            <h2>Note:</h2>
                            <p className="login-note">THIS PAGE IS ONLY FOR ADMINISTRATORS, IT IS NOT FOR COMMON USERS. IF YOU HAVE AN ADMINISTRATOR ACCOUNT
                               PLEASE USE THE FORM NEXT TO THIS TEXT TO LOG IN WITH YOUR GIVEN CREDENTIALS. OTHERWISE, GO AWAY!
                            </p>
                         </Col>
                         <Col>
                            <Jumbotron>
                                <AvForm onSubmit={this.handleSubmit}>
                                    <Row>
                                        <Col sm="10">
                                            <AvGroup>
                                                <Label className="form-label" for="Email">Email</Label>
                                                <AvInput type="email" name="email" id="LoginFormEmail" placeholder="Type your Email Here" onChange={this.usernameChange} required />
                                                <AvFeedback className="av-feedback">This Field is Required!</AvFeedback>
                                            </AvGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm="10">
                                            <AvGroup>
                                                <Label className="form-label" for="Password">Password</Label>
                                                <AvInput type={input_type} name="password" id="LoginFormPassword" placeholder="Type your Password Here"  onChange={this.passwordChange} required />
                                                <AvFeedback className="av-feedback">This Field is Required!</AvFeedback>
                                            </AvGroup>
                                        </Col> 
                                        <Col md={{offset: -2}}>
                                            <br />
                                            <Button outline onClick={this.toggleVisiblePassword}><FontAwesomeIcon icon={icon} /></Button>
                                        </Col>
                                    </Row>
                                    <Button outline color="info" type="submit">Log In</Button>
                                </AvForm>
                            </Jumbotron>
                         </Col> 
                     </Row>
                     <br />
                     <br />
                     <br />
                     <br />
                </Container>
            </div>
        );
    }
}

export default LoginForm;