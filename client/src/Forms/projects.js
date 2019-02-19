import React, { Component } from 'react';
import './member.css';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Container, Row, Col, Button, FormGroup, Label, Input, FormText, Jumbotron, CardImg } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faFileImage } from '@fortawesome/fontawesome-free-solid';
import axios from 'axios';


class ProjectsForm extends Component {
    constructor(props){
        super(props)
        this.state={
            projectName: this.props.project ? this.props.project.name : null,
            projectStatus: this.props.project ? this.props.project.status : null,
            projectLabs: this.props.project ? this.props.project.labs : null,
            projectDescription: this.props.project ? this.props.project.description : null,
            projectPublication: this.props.project ? this.props.project.publication : null,
            projectGithub: this.props.project ? this.props.project.github : null,
            projectPaper: this.props.project ? this.props.project.paper : null,
            projectWebsite: this.props.project ? this.props.project.website : null,
            selectedImage: null
        }
    }
    

    nameChange = event =>{
        event.persist();
        this.setState({ projectName: event.target.value });
    }

    statusChange = event =>{
        event.persist();
        this.setState({ projectStatus: event.target.value });
    }

    labsChange = event =>{
        event.persist();
        this.setState({ projectLabs: event.target.value });
    }

    descriptionChange = event =>{
        event.persist();
        this.setState({ projectDescription: event.target.value });
    }

    publicationChange = event =>{
        event.persist();
        this.setState({ projectPublication: event.target.value });
    }

    githubChange = event =>{
        event.persist();
        this.setState({ projectGithub: event.target.value });
    }

    websiteChange = event =>{
        event.persist();
        this.setState({ projectWebsite: event.target.value });
    }

    paperChange = event =>{
        event.persist();
        this.setState({ projectPaper: event.target.value });
    }

    fileInputChange = event =>{
        this.setState({ selectedImage: URL.createObjectURL(event.target.files[0]) });
    }

    fileInputClick = () =>{
        document.getElementById('memberImage').click();
    }

    handleSubmit = event =>{
        event.persist();

        axios.post(`/api/projects`, { 
            name: this.state.projectName,
            status: this.state.projectStatus,
            labs: this.state.projectLabs,
            description: this.state.projectDescription,
            publication: this.state.projectPublication,
            github: this.state.projectGithub,
            paper: this.state.projectPaper,
            website: this.state.projectWebsite,
            image: "a",
                 
            })
            .then(res =>{
                if(res.data.success === true){
                    this.props.history.push('/projects');
                    window.location.reload();
                }
                else{
                    console.log("Adding Project Failed!");
                    console.log(res);
                }
            });
    }

    handleUpdate = event =>{
        event.persist();

        axios.put(`/api/projects/${this.props.project._id}`, { 
            name: this.state.projectName,
            status: this.state.projectStatus,
            labs: this.state.projectLabs,
            description: this.state.projectDescription,
            publication: this.state.projectPublication,
            github: this.state.projectGithub,
            paper: this.state.projectPaper,
            website: this.state.projectWebsite,
            image: this.props.project.image,
                 
            })
            .then(res =>{
                if(res.data.success === true){
                    window.location.reload();
                }
                else{
                    console.log("Updating Project Failed!");
                    console.log(res);
                }
            });
    }


    render() {
        return (
            <div>
                <Container>
                    {this.props.project ? null : <Row><br /><br /></Row>}
                    <Row>
                        <Col md={{size: 6, offset: 3}}>
                            {this.props.project ? <h1>Update Project</h1> : <h1>Add New Project</h1>}
                            <br />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Jumbotron>
                                <AvForm onSubmit={this.props.project ? this.handleUpdate : this.handleSubmit}>
                                    <AvGroup>
                                        <Label className="form-label" for="example">Name of Project *</Label>
                                        <AvInput name="name" id="projectName" value={this.state.projectName} placeholder="Enter Project Name Here" required onChange={this.nameChange}/>
                                        <AvFeedback className="av-feedback">This Field is Required!</AvFeedback>
                                    </AvGroup>
                                    <AvGroup>
                                        <Label className="form-label" for="memberEmail">Status *</Label>
                                        <AvInput name="email" id="memberEmail" value={this.state.projectStatus} placeholder="Enter Member Email here" required onChange={this.statusChange}/>
                                        <AvFeedback className="av-feedback">This Field is Required!</AvFeedback>
                                    </AvGroup>
                                    <AvGroup>
                                        <Label className="form-label" for="memberPosition">Labs Associated *</Label>
                                        <AvInput name="position" id="memberPosition" value={this.state.projectLabs} placeholder="Enter Labs Associated here" required onChange={this.labsChange}/>
                                        <AvFeedback className="av-feedback">This Field is Required!</AvFeedback>
                                        <FormText className="form-text" color="muted">
                                            Please refer to Projects page to see the format of the Labs Field. Keep data 
                                            as uniform as possible.
                                        </FormText>
                                    </AvGroup>
                                    <AvGroup>
                                        <Label className="form-label" for="memberUniversity">Publication</Label>
                                        <AvInput name="university" id="memberUniversity" value={this.state.projectPublication} placeholder="Enter Link to Publication here" onChange={this.publicationChange}/>
                                        <FormText className="form-text" color="muted">
                                            Only enter a URL in this field. This is not required for all projects.
                                        </FormText>
                                    </AvGroup>
                                    <AvGroup>
                                        <Label className="form-label" for="memberMajor">Github</Label>
                                        <AvInput name="major" type="text" id="memberMajor" value={this.state.projectGithub} placeholder="Enter Github Repo Link here" onChange={this.githubChange}/>
                                        <FormText className="form-text" color="muted">
                                            Only enter a URL in this field. This is not required for all projects.
                                        </FormText>
                                    </AvGroup>
                                    <AvGroup>
                                        <Label className="form-label" for="memberEducation">Paper</Label>
                                        <AvInput name="education" type="text" id="memberEducation" value={this.state.projectPaper} placeholder="Enter Link to Paper here" onChange={this.paperChange}/>
                                    </AvGroup>
                                    <FormGroup>
                                        <Label className="form-label" for="memberWebsite">Website</Label>
                                        <Input type="text" id="memberWebsite" value={this.state.projectWebsite} placeholder="Enter Member Website here" onChange={this.websiteChange}/>
                                        <FormText className="form-text" color="muted">
                                            Only enter a URL in this field. This is not required for all projects.
                                        </FormText>
                                    </FormGroup>
                                    <AvGroup>
                                        <Label className="form-label" for="memberDescription">Description</Label>
                                        <AvInput style={{height: "200px"}} type="textarea" name="description" value={this.state.projectDescription} placeholder="Enter Project Description here" onChange={this.descriptionChange}/>
                                        <FormText className="form-text" color="muted">
                                            If you don't have a project description you don't have to enter anything in this field. 
                                            In that case the Description of the project will be 'TBA'
                                        </FormText>
                                    </AvGroup>
                                    <FormGroup>
                                        <Label className="form-label" for="memberImage">Project Image</Label>
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
                                    {this.props.project ? <Button outline color="warning" size="lg" block>Update</Button> : <Button outline color="warning" size="lg" block>Submit</Button>}
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

export default ProjectsForm;