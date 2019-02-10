import React, { Component } from 'react';
import './member.css';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Jumbotron, CustomInput } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faFileImage } from '@fortawesome/fontawesome-free-solid';

class MemberForm extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row><br /><br /></Row>
                    <Row>
                        <Col md={{size: 6, offset: 3}}>
                            <h1>Add New Member</h1>
                            <br />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Jumbotron>
                                <Form>
                                    <FormGroup>
                                        <Label className="form-label" for="memberName">Name and Last Name *</Label>
                                        <Input type="text" placeholder="Enter Member Name here" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="form-label" for="memberEmail">Email *</Label>
                                        <Input type="email" placeholder="Enter Member Email here" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="form-label" for="memberPosition">Position *</Label>
                                        <Input type="text" placeholder="Enter Member Position here" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="form-label" for="memberUniversity">University *</Label>
                                        <Input type="text" placeholder="Enter Member University here" />
                                        <FormText className="form-text" color="muted">
                                            Please refer to About Us page to see the format of the University Field. Keep data 
                                            as uniform as possible.
                                        </FormText>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="form-label" for="memberMajor">Major *</Label>
                                        <Input type="text" placeholder="Enter Member Major here" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="form-label" for="memberEducation">Education Level *</Label>
                                        <Input type="text" placeholder="Enter Member Education Level here" />
                                        <FormText className="form-text" color="muted">
                                            Please refer to About Us page to see the format of the Education Field. It sould be
                                            in the format of "MS.,BS." Keep data as uniform as possible.
                                        </FormText>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="form-label" for="memberWebsite">Website</Label>
                                        <Input type="text" placeholder="Enter Member Website here" />
                                        <FormText className="form-text" color="muted">
                                            Only enter a URL in this field. This is not required for all members.
                                        </FormText>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="form-label" for="memberDescription">Description *</Label>
                                        <Input style={{height: "200px"}} type="textarea" name="text" id="exampleText" />
                                    </FormGroup>
                                    <FormGroup tag="fieldset">
                                        <Label className="form-label" for="memberType">Member Category *</Label>
                                        <br />
                                        <FormGroup>
                                            <div>
                                                <CustomInput className="form-radio-div-custom" type="radio" id="exampleCustomRadio" name="customRadio" label="Faculty from Colorado State University" />
                                                <CustomInput className="form-radio-div" type="radio" id="exampleCustomRadio2" name="customRadio" label="Faculty from Florida International University" />
                                                <CustomInput className="form-radio-div" type="radio" id="exampleCustomRadio3" name="customRadio" label="Current Member" />
                                                <CustomInput className="form-radio-div" type="radio" id="exampleCustomRadio4" name="customRadio" label="Affiliated Member" />
                                                <CustomInput className="form-radio-div" type="radio" id="exampleCustomRadio5" name="customRadio" label="Former Member" />
                                             </div>
                                        </FormGroup>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label className="form-label" for="memberImage">Member Image</Label>
                                        <br />
                                        <Input style={{display: 'none'}} type="file" name="file" id="exampleFile" ref={fileInput => this.fileInput = fileInput}/>
                                        <br />
                                        <Col md={{size: 2}}>
                                            <Button className="form-image-button" outline color="success" onClick={this.fileInput}><FontAwesomeIcon icon={faFileImage} size="9x" /></Button>
                                        </Col>
                                    </FormGroup>
                                    <Button outline color="primary">Submit</Button>
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

export default MemberForm;