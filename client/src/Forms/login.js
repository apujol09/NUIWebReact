import React, { Component } from 'react';
import './login.css';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, Jumbotron } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash} from '@fortawesome/fontawesome-free-solid';

class LoginForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            passwordVisible: false
        }
        this.toggleVisiblePassword = this.toggleVisiblePassword.bind(this);
      }

      toggleVisiblePassword(){
            this.setState({ passwordVisible: !this.state.passwordVisible});
      }

    render() {
        let icon = this.state.passwordVisible ? faEyeSlash : faEye;
        let input_type = this.state.passwordVisible ? "email" : "password";
        return (
            <div>
                <Container>
                    <Row><br /><br /></Row>
                    <Row>
                        <Col md={{size: 6, offset: 3}}>
                            <h2>Administrator Log In</h2>
                            <br />
                        </Col>
                    </Row>
                     <Row>
                         <Col sm="6">
                            <h1>Note:</h1>
                            <p className="login-note">THIS PAGE IS ONLY FOR ADMINISTRATORS, IT IS NOT FOR COMMON USERS. IF YOU HAVE AN ADMINISTRATOR ACCOUNT
                               PLEASE USE THE FORM NEXT TO THIS TEXT TO LOG IN WITH YOUR GIVEN CREDENTIALS. OTHERWISE, GO AWAY!
                            </p>
                         </Col>
                         <Col>
                            <Jumbotron>
                                <Form>
                                    <Row>
                                        <Col sm="10">
                                            <FormGroup>
                                                <Label className="form-label" for="Email">Email</Label>
                                                <Input type="email" name="email" id="LoginFormEmail" placeholder="Type your Email Here" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm="10">
                                            <FormGroup>
                                                <Label className="form-label" for="Password">Password</Label>
                                                <Input type={input_type} name="password" id="LoginFormPassword" placeholder="Type your Password Here" />
                                            </FormGroup>
                                        </Col> 
                                        <Col md={{offset: -2}}>
                                            <br />
                                            <Button outline onClick={this.toggleVisiblePassword}><FontAwesomeIcon icon={icon} /></Button>
                                        </Col>
                                    </Row>
                                    <Button outline color="info">Log In</Button>
                                </Form>
                            </Jumbotron>
                         </Col> 
                     </Row>
                     <br />
                </Container>
            </div>
        );
    }
}

export default LoginForm;