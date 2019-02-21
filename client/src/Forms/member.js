import React, { Component } from 'react';
import './member.css';
import { AvForm, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio, AvField } from 'availity-reactstrap-validation';
import { Container, Row, Col, Button, FormGroup, Label, Input, FormText, Jumbotron, CardImg } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faFileImage } from '@fortawesome/fontawesome-free-solid';
import axios from 'axios';


class MemberForm extends Component {
    constructor(props){
        super(props)
        this.state={
            memberName: this.props.member ? this.props.member.name : null,
            memberEmail: this.props.member ? this.props.member.email : null,
            memberPosition: this.props.member ? this.props.member.position : null,
            memberUniversity: this.props.member ? this.props.member.university : null,
            memberMajor: this.props.member ? this.props.member.major : null,
            memberEducation: this.props.member ? this.props.member.education : null,
            memberWebsite: this.props.member ? this.props.member.website : null,
            memberDescription: this.props.member ? this.props.member.description : null,
            memberCategory: this.props.category ? this.props.category : "facultyCSU",
            categoryBackup: this.props.category ? this.props.category : null,
            selectedImage: null
        }
    }
    

    nameChange = event =>{
        event.persist();
        this.setState({ memberName: event.target.value });
    }

    emailChange = event =>{
        event.preventDefault();
        this.setState({ memberEmail: event.target.value });
    }

    positionChange = event =>{
        event.persist();
        this.setState({ memberPosition: event.target.value });
    }

    universityChange = event =>{
        event.persist();
        this.setState({ memberUniversity: event.target.value });
    }

    majorChange = event =>{
        event.persist();
        this.setState({ memberMajor: event.target.value });
    }

    educationChange = event =>{
        event.persist();
        this.setState({ memberEducation: event.target.value });
    }

    websiteChange = event =>{
        event.persist();
        this.setState({ memberWebsite: event.target.value });
    }

    descriptionChange = event =>{
        event.persist();
        this.setState({ memberDescription: event.target.value });
    }

    categoryChange = event =>{
        event.persist();
        this.setState({ memberCategory: event.target.value });
    }

    fileInputChange = event =>{
        this.setState({ selectedImage: URL.createObjectURL(event.target.files[0]) });
        console.log(this.state.selectedImage);
    }

    fileInputClick = () =>{
        document.getElementById('memberImage').click();
    }

    handleSubmit = event =>{
        event.persist();

        axios.post(`/api/${this.state.memberCategory}`, { 
            name: this.state.memberName,
            education: this.state.memberEducation,
            major: this.state.memberMajor,
            position: this.state.memberPosition,
            email: this.state.memberEmail,
            university: this.state.memberUniversity,
            website: this.state.memberWebsite,
            image: "a",
            description: this.state.memberDescription 
            })
            .then(res =>{
                if(res.data.success === true){
                    this.props.history.push('/about');
                    window.location.reload();
                }
                else{
                    console.log("Adding Member Failed!");
                    console.log(res);
                }
        });
    }

    handleUpdate = event =>{
        event.persist();
        if(this.props.category){
            axios.delete(`/api/${this.state.categoryBackup}/${this.props.member._id}`).then(res => {
                if(res.data.success === true){
                    window.location.reload();
                }
                else{
                    console.log("Delete Failed!")
                    console.log(res)
                }
            });

            axios.post(`/api/${this.state.memberCategory}`, { 
                name: this.state.memberName,
                education: this.state.memberEducation,
                major: this.state.memberMajor,
                position: this.state.memberPosition,
                email: this.state.memberEmail,
                university: this.state.memberUniversity,
                website: this.state.memberWebsite,
                image: this.props.member.image,
                description: this.state.memberDescription 
                })
                .then(res =>{
                    if(res.data.success === true){
                        console.log("Updating Member Success!")
                    }
                    else{
                        console.log("Updating Member Failed!");
                        console.log(res);
                    }
            });
        }
        else{
            axios.put(`/api/${this.state.memberCategory}/${this.props.member._id}`, { 
                name: this.state.memberName,
                education: this.state.memberEducation,
                major: this.state.memberMajor,
                position: this.state.memberPosition,
                email: this.state.memberEmail,
                university: this.state.memberUniversity,
                website: this.state.memberWebsite,
                image: this.props.member.image,
                description: this.state.memberDescription 
                })
                .then(res =>{
                    if(res.data.success === true){
                        window.location.reload();
                    }
                    else{
                        console.log("Updating Member Failed!");
                        console.log(res);
                    }
            });
        }
    }

    render() {

        return (
            <div>
                <Container>
                    {this.props.member ? null : <Row><br /><br /></Row>}
                    <Row>
                        <Col md={{size: 6, offset: 3}}>
                            {this.props.member ? <h1>Update Member</h1> : <h1>Add New Member</h1>}
                            <br />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Jumbotron>
                                <AvForm onSubmit={this.props.member ? this.handleUpdate : this.handleSubmit}>
                                    <AvGroup>
                                        <Label className="form-label" for="example">Name *</Label>
                                        <AvInput name="name" id="memberName" value={this.state.memberName} placeholder="Enter Member Name Here" required onChange={this.nameChange}/>
                                        <AvFeedback className="av-feedback">This Field is Required!</AvFeedback>
                                    </AvGroup>
                                    <AvGroup>
                                        <Label className="form-label" for="memberEmail">Email *</Label>
                                        <AvInput name="email" id="memberEmail" value={this.state.memberEmail} placeholder="Enter Member Email here" required onChange={this.emailChange}/>
                                        <AvFeedback className="av-feedback">This Field is Required!</AvFeedback>
                                    </AvGroup>
                                    <AvGroup>
                                        <Label className="form-label" for="memberPosition">Position *</Label>
                                        <AvInput name="position" id="memberPosition" value={this.state.memberPosition} placeholder="Enter Member Position here" required onChange={this.positionChange}/>
                                        <AvFeedback className="av-feedback">This Field is Required!</AvFeedback>
                                    </AvGroup>
                                    <AvGroup>
                                        <Label className="form-label" for="memberUniversity">University *</Label>
                                        <AvInput name="university" id="memberUniversity" value={this.state.memberUniversity} placeholder="Enter Member University here" required onChange={this.universityChange}/>
                                        <AvFeedback className="av-feedback">This Field is Required!</AvFeedback>
                                        <FormText className="form-text" color="muted">
                                            Please refer to About Us page to see the format of the University Field. Keep data 
                                            as uniform as possible.
                                        </FormText>
                                    </AvGroup>
                                    <AvGroup>
                                        <Label className="form-label" for="memberMajor">Major *</Label>
                                        <AvInput name="major" type="text" id="memberMajor" value={this.state.memberMajor} placeholder="Enter Member Major here" required onChange={this.majorChange}/>
                                        <AvFeedback className="av-feedback">This Field is Required!</AvFeedback>
                                    </AvGroup>
                                    <AvGroup>
                                        <Label className="form-label" for="memberEducation">Education Level *</Label>
                                        <AvInput name="education" type="text" id="memberEducation" value={this.state.memberEducation} placeholder="Enter Member Education Level here" required onChange={this.educationChange}/>
                                        <AvFeedback className="av-feedback">This Field is Required!</AvFeedback>
                                        <FormText className="form-text" color="muted">
                                            Please refer to About Us page to see the format of the Education Field. It sould be
                                            in the format of "MS.,BS." Keep data as uniform as possible.
                                        </FormText>
                                    </AvGroup>
                                    <FormGroup>
                                        <Label className="form-label" for="memberWebsite">Website</Label>
                                        <Input type="text" id="memberWebsite" value={this.state.memberWebsite} placeholder="Enter Member Website here" onChange={this.websiteChange}/>
                                        <FormText className="form-text" color="muted">
                                            Only enter a URL in this field. This is not required for all members.
                                        </FormText>
                                    </FormGroup>
                                    <AvGroup>
                                        <Label className="form-label" for="memberDescription">Description *</Label>
                                        <AvInput style={{height: "200px"}} type="textarea" value={this.state.memberDescription} name="description" placeholder="Enter Member Description here" required onChange={this.descriptionChange}/>
                                        <AvFeedback className="av-feedback">This Field is Required!</AvFeedback>
                                    </AvGroup>
                                    <AvField type="select" name="select" label="Option" value={this.state.memberCategory} helpMessage="Please Select one of these categories to put the new member in!" required onChange={this.categoryChange}>
                                        <option value="facultyCSU">Faculty from Colorado State University</option>
                                        <option value="facultyFIU">Faculty from Florida International University</option>
                                        <option value="members">Current Member</option>
                                        <option value="affiliated">Affiliated Member</option>
                                        <option value="former">Former Member</option>
                                    </AvField>
                                    <FormGroup>
                                        <Label className="form-label" for="memberImage">Member Image</Label>
                                        <br />
                                        <Input style={{display: 'none'}} type="file" id="memberImage" ref="fileInput" onChange={this.fileInputChange} />
                                        <br />
                                        <Row>
                                            <Col md={{size: 2}}>
                                                <Button outline color="success" onClick={this.fileInputClick}><FontAwesomeIcon icon={faFileImage} size="7x" /></Button>
                                            </Col>
                                            <Col md={{size: 3}}>
                                                <CardImg src={this.state.selectedImage} />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    {this.props.member ? <Button outline color="primary" size="lg" block>Update</Button> : <Button outline color="primary" size="lg" block>Submit</Button>}
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

export default MemberForm;