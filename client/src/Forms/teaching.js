import React, { Component } from 'react';
import './member.css';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Container, Row, Col, Button, Label, FormText, Jumbotron } from 'reactstrap';
import axios from 'axios';


class TeachingForm extends Component {
    constructor(props){
        super(props)
        this.state={
            className: this.props.teaching ? this.props.teaching.name : "",
            nameValue: this.props.teaching ? this.props.teaching.name : null,
            classCode: this.props.teaching ? this.props.teaching.code : "",
            codeValue: this.props.teaching ? this.props.teaching.code: null,
            classLink: this.props.teaching ? this.props.teaching.link : "",
            linkValue: this.props.teaching ? this.props.teaching.link : null,
            classTime: this.props.teaching ? this.props.teaching.time : "",
            timeValue: this.props.teaching ? this.props.teaching.time : null,
            classDescription: this.props.teaching ? this.props.teaching.description : "",
            descriptionValue: this.props.teaching ? this.props.teaching.description : null,
            classSemester: this.props.teaching ? this.props.teaching.semester : "",
            semesterValue: this.props.teaching ? this.props.teaching.semester : null
        }
    }
    

    nameChange = event =>{
        event.persist();
        this.setState({ className: event.target.value });
    }

    codeChange = event =>{
        event.persist();
        this.setState({ classCode: event.target.value });
    }

    linkChange = event =>{
        event.persist();
        this.setState({ classLink: event.target.value });
    }

    timeChange = event =>{
        event.persist();
        this.setState({ classTime: event.target.value });
    }

    descriptionChange = event =>{
        event.preventDefault();
        this.setState({ classDescription: event.target.value });
    }

    semesterChange = event =>{
        event.preventDefault();
        this.setState({ classSemester: event.target.value });
    }    

    handleSubmit = event =>{
        event.persist();

        axios.post(`/api/teaching`, { 
            name: this.state.className,
            code: this.state.classCode,
            link: this.state.classLink,
            time: this.state.classTime,
            description: this.state.classDescription,
            semester: this.state.classSemester
                 
            })
            .then(res =>{
                if(res.data.success === true){
                    this.props.history.push('/teaching');
                    window.location.reload();
                }
                else{
                    console.log("Adding Class Failed!");
                    console.log(res);
                }
            });
    }

    handleUpdate = event =>{
        event.persist();
        
        axios.put(`/api/teaching/${this.props.teaching._id}`, { 
            name: this.state.className,
            code: this.state.classCode,
            link: this.state.classLink,
            time: this.state.classTime,
            description: this.state.classDescription,
            semester: this.state.classSemester
                 
            })
            .then(res =>{
                if(res.data.success === true){
                    window.location.reload();
                }
                else{
                    console.log("Updating Class Failed!");
                    console.log(res);
                }
            });
    }


    render() {
        return (
            <div>
                <Container>
                    {this.props.teaching ? null : <Row><br /><br /></Row>}
                    <Row>
                        <Col md={{size: 6, offset: 3}}>
                            {this.props.teaching ? <h1>Update Class</h1> : <h1>Add New Class</h1>}
                            <br />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Jumbotron>
                                <AvForm onSubmit={this.props.teaching ? this.handleUpdate : this.handleSubmit}>
                                    <AvGroup>
                                        <Label className="form-label" for="example">Class Name *</Label>
                                        <AvInput name="name" value={this.state.nameValue} placeholder="Enter Class Name Here" required onChange={this.nameChange}/>
                                        <AvFeedback className="av-feedback">This Field is Required!</AvFeedback>
                                    </AvGroup>
                                    <AvGroup>
                                        <Label className="form-label" for="memberEmail">Class Code</Label>
                                        <AvInput name="code" value={this.state.codeValue} placeholder="Enter Class Code here" required onChange={this.codeChange}/>
                                        <AvFeedback className="av-feedback">This Field is Required!</AvFeedback>
                                    </AvGroup>
                                    <AvGroup>
                                        <Label className="form-label" for="memberPosition">Class Link</Label>
                                        <AvInput name="link" value={this.state.linkValue} placeholder="Enter Class Link here" onChange={this.linkChange}/>
                                        <AvFeedback className="av-feedback">This Field is Required!</AvFeedback>
                                        <FormText className="form-text" color="muted">
                                            Only type a URL for this field. This is not required for all classes.
                                        </FormText>
                                    </AvGroup>
                                    <AvGroup>
                                        <Label className="form-label" for="memberPosition">Class Time</Label>
                                        <AvInput name="time" value={this.state.timeValue} placeholder="Enter Class Time here" onChange={this.timeChange}/>
                                        <AvFeedback className="av-feedback">This Field is Required!</AvFeedback>
                                        <FormText className="form-text" color="muted">
                                            Please refer to Teaching Page to see the format of the time. If you don't provide a time
                                            it will by default be stored as "TBA"
                                        </FormText>
                                    </AvGroup>
                                    <AvGroup>
                                        <Label className="form-label" for="memberDescription">Description *</Label>
                                        <AvInput style={{height: "200px"}} value={this.state.descriptionValue} type="textarea" name="description" placeholder="Enter Class Description here" required onChange={this.descriptionChange}/>
                                        <AvFeedback className="av-feedback">This Field is Required!</AvFeedback>
                                    </AvGroup>
                                    <AvGroup>
                                        <Label className="form-label" for="memberPosition">Class Semester *</Label>
                                        <AvInput name="semester" value={this.state.semesterValue} placeholder="Enter Class Semester here" required onChange={this.semesterChange}/>
                                        <AvFeedback className="av-feedback">This Field is Required!</AvFeedback>
                                        <FormText className="form-text" color="muted">
                                            Please type the exact string of the Semester you want the class to be in.
                                            If the class' semester does not match anything, it will be put in a separate
                                            Semester.
                                        </FormText>
                                    </AvGroup>
                                    {this.props.teaching ? <Button outline color="info" size="lg" block>Update</Button> : <Button outline color="info" size="lg" block>Submit</Button>}
                                </AvForm>
                            </Jumbotron>
                        </Col>
                    </Row>
                    <br />
                </Container>
            </div>
        );
    }
}

export default TeachingForm;