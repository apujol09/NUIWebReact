import React, { Component } from 'react';
import './member.css';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Container, Row, Col, Button, Label, FormText, Jumbotron } from 'reactstrap';
import axios from 'axios';


class PublicationForm extends Component {

    state={
        publicationCitation: "",
        publicationLinks: [],
        publicationCategory: "",
    }

    citationChange = event =>{
        event.persist();
        this.setState({ publicationCitation: event.target.value });
    }

    linksChange = event =>{
        event.preventDefault();

        let info = event.target.value.split(' ');
        let sources = info.map(link =>{
            return link.split(':')
        })
        let links = sources.map(link =>{
            return {"from": link[0], "url": "http://" + link[1]}
        })
        this.setState({ publicationLinks: links });
    }

    categoryChange = event =>{
        event.preventDefault();
        this.setState({ publicationCategory: event.target.value });
    }    

    handleSubmit = event =>{
        event.persist();

        axios.post(`/api/publications`, { 
            name: this.state.publicationCitation,
            links: this.state.publicationLinks,
            category: this.state.publicationCategory,
                 
            })
            .then(res =>{
                if(res.data.success === true){
                    this.props.history.push('/publications');
                    window.location.reload();
                }
                else{
                    console.log("Adding Publication Failed!");
                    console.log(res);
                }
            });
    }


    render() {
        return (
            <div>
                <Container>
                    <Row><br /><br /></Row>
                    <Row>
                        <Col md={{size: 6, offset: 3}}>
                            <h1>Add New Project</h1>
                            <br />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Jumbotron>
                                <AvForm onSubmit={this.handleSubmit}>
                                    <AvGroup>
                                        <Label className="form-label" for="example">Citation for Publication *</Label>
                                        <AvInput name="citation" placeholder="Enter Publication Citation Here" required onChange={this.citationChange}/>
                                        <AvFeedback className="av-feedback">This Field is Required!</AvFeedback>
                                        <FormText className="form-text" color="muted">
                                            Please be careful which citation you use for this field. Whatever you 
                                            input here will be shown on the Publications Page.
                                            <br /> 
                                            <b>NOTE:</b> Please wrap
                                            Ortega's name within single quotation marks like so: 'Ortega, F.' so his name will
                                            show in Bold.
                                        </FormText>
                                    </AvGroup>
                                    <AvGroup>
                                        <Label className="form-label" for="memberEmail">Links</Label>
                                        <AvInput name="links" placeholder="Enter Member Email here" onChange={this.linksChange}/>
                                        <AvFeedback className="av-feedback">This Field is Required!</AvFeedback>
                                        <FormText className="form-text" color="muted">
                                            If you have any links to provide for this Publication, please type the
                                            URLs separated by a space specifying also where the link comes from 
                                            in the following way: <b>Name_of_Source:URL</b>. Please <b>DO NOT INCLUDE</b> the "http://"
                                            part of the URL, doing so will result in an error of storing the URL.
                                        </FormText>
                                    </AvGroup>
                                    <AvGroup>
                                        <Label className="form-label" for="memberPosition">Category *</Label>
                                        <AvInput name="category" placeholder="Enter Publication Category here" required onChange={this.categoryChange}/>
                                        <AvFeedback className="av-feedback">This Field is Required!</AvFeedback>
                                        <FormText className="form-text" color="muted">
                                            Categories are the different sections in the Publiactions Page. This is required! 
                                            You can put the Publication in an already existing category or type a new one 
                                            and it will be created.
                                        </FormText>
                                    </AvGroup>
                                    <Button outline color="danger" size="lg" block>Submit</Button>
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

export default PublicationForm;