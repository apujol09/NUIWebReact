import React, { Component } from 'react';
import './login.css';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Container, Row, Col, Button, Label, Jumbotron, Alert } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash} from '@fortawesome/fontawesome-free-solid';
import axios from 'axios';

class RegisterAdmin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            passwordVisible: false,
            confirmVisible: false,
            passwordsMatch: false,
            username: "",
            password: "",
            confirm: "",
            displayAlert: false
        }
        this.toggleVisiblePassword = this.toggleVisiblePassword.bind(this);
        this.toggleVisibleConfirm = this.toggleVisibleConfirm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    toggleVisiblePassword(){
        this.setState({ passwordVisible: !this.state.passwordVisible});
    }

    toggleVisibleConfirm(){
        this.setState({ confirmVisible: !this.state.confirmVisible});
  }

    usernameChange = event =>{
        event.persist();
        this.setState({ username: event.target.value });
    }

    passwordChange = event =>{
        event.persist();
        this.setState({ password: event.target.value });
    }

    confirmChange = event =>{
        event.persist();
        this.setState({ confirm: event.target.value });
    }
    
    toggle(){
        this.setState({ modal: !this.state.modal });
    }


    handleSubmit = event => {
        event.preventDefault();

        document.getElementById('LoginFormEmail').value = null;
        document.getElementById('LoginFormPassword').value = null;

        if(this.state.password === this.state.confirm){
            this.setState({ passwordsMatch: true });
        }

        if(this.state.passwordsMatch){
            axios.post(`api/register`, { 
                username: this.state.username,
                password: this.state.password
            })
            .then(res => {
                if(res.data.success === true){
                    console.log("Success!")
                    this.props.history.push('/');
                    window.location.reload();
                }
                else{
                    console.log(res);
                    console.log(res.data);
                }
            })
        }
        else{
            this.setState({ displayAlert: true })
        }
      }

    render() {
        let iconPassword = this.state.passwordVisible ? faEyeSlash : faEye;
        let iconConfirm = this.state.confirmVisible ? faEyeSlash : faEye;
        let input_type_Password = this.state.passwordVisible ? "text" : "password";
        let input_type_Confirm = this.state.confirmVisible ? "text" : "password";
        return (
            <div>
                <Container>
                    <Row><br /><br /></Row>
                    <Row>
                        <Col md={{size: 6, offset: 3}}>
                            <h1>Register Admin</h1>
                            <br />
                        </Col>
                    </Row>
                     <Row>
                         <Col sm="6">
                            <h2>Note:</h2>
                            <p className="login-note">THIS PAGE IS FOR REGISTERING ADMINISTRATORS THAT WILL HAVE ACCESS TO ADDING NEW MEMBERS, 
                                                     PROJECTS, PUBLICATIONS, AMONG OTHER PRIVILEGES. IF YOU DO NOT WANT TO GIVE ACCESS PLEASE CLICK AWAY NOW!
                            </p>
                         </Col>
                         <Col>
                            <Jumbotron>
                                <AvForm onSubmit={this.handleSubmit}>
                                    <Row>
                                        <Col sm="10">
                                            <AvGroup>
                                                <Label className="form-label" for="Email">Admin Email</Label>
                                                <AvInput type="email" name="email" id="LoginFormEmail" placeholder="Type your Email Here" onChange={this.usernameChange} required />
                                                <AvFeedback className="av-feedback">This Field is Required!</AvFeedback>
                                            </AvGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm="10">
                                            <AvGroup>
                                                <Label className="form-label" for="Password">Admin Password</Label>
                                                <AvInput type={input_type_Password} name="password" id="LoginFormPassword" placeholder="Type your Password Here"  onChange={this.passwordChange} required />
                                                <AvFeedback className="av-feedback">This Field is Required!</AvFeedback>
                                            </AvGroup>
                                        </Col> 
                                        <Col md={{offset: -2}}>
                                            <br />
                                            <Button outline onClick={this.toggleVisiblePassword}><FontAwesomeIcon icon={iconPassword} /></Button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm="10">
                                            <AvGroup>
                                                <Label className="form-label" for="Password">Confirm Password</Label>
                                                <AvInput type={input_type_Confirm} name="password" id="LoginFormConfirm" placeholder="Confirm Password" onChange={this.confirmChange} required />
                                                <AvFeedback className="av-feedback">This Field is Required!</AvFeedback>
                                            </AvGroup>
                                        </Col> 
                                        <Col md={{offset: -2}}>
                                            <br />
                                            <Button outline onClick={this.toggleVisibleConfirm}><FontAwesomeIcon icon={iconConfirm} /></Button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm="10">
                                            {this.state.displayAlert ? <Alert className="admin-form-alert" color="danger">Passwords must Match!</Alert> : null}
                                        </Col>
                                    </Row>
                                    <Button outline color="info" type="submit">Register</Button>
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


export default RegisterAdmin;