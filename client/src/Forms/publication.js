import React, { Component } from 'react';
import './member.css';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Container, Row, Col, Button, Label, FormText, Jumbotron, CustomInput } from 'reactstrap';
import axios from 'axios';


class PublicationForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            publicationCitation: this.props.publication ? this.props.publication.name : "",
            publicationLinks: [],
            publicationCategory: this.props.publication ? this.props.publication.category : "Refereed Journals",
            citationValue: this.props.publication ? this.props.publication.name : null,
            linksValue: null,
            categoryValue: this.props.publication ? this.props.publication.category : null,
            publications: []
        }

      }

    componentDidMount(){
        axios.get(`/api/publications`)
        .then(res =>{
            this.setState({ publications: res.data })
        })

        if(this.props.publication){
            let links = this.props.publication.links.map(link =>{
                return link.from + ";" + link.url
            })

            let text = links.join(' ');
            if(text !== ""){
                this.setState({ linksValue: text })
            }
            else{
                this.setState({ linksValue: "" })
            }
        }
    }

    citationChange = event =>{
        event.persist();
        this.setState({ publicationCitation: event.target.value });
    }

    linksChange = event =>{
        event.preventDefault();
        if(event.target.value !== ""){
            let info = event.target.value.split(' ');
            let sources = info.map(link =>{
                return link.split(';')
            })
            let links = sources.map(link =>{
                return {"from": link[0], "url": link[1]}
            })
            this.setState({ publicationLinks: links });
        }
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

    handleUpdate = event =>{
        event.persist();

        axios.put(`/api/publications/${this.props.publication._id}`, { 
            name: this.state.publicationCitation,
            links: this.state.publicationLinks,
            category: this.state.publicationCategory,
                 
            })
            .then(res =>{
                if(res.data.success === true){
                    window.location.reload();
                }
                else{
                    console.log("Updating Publication Failed!");
                    console.log(res);
                }
            });
    }


    render() {
        let categories = []
        this.state.publications.map(publication =>{
            if(!categories.includes(publication.category)){
                categories.push(publication.category)
            }
        })
        return (
            <div>
                <Container>
                    {this.props.publication ? null : <Row><br /><br /></Row>}
                    <Row>
                        <Col md={{size: 6, offset: 3}}>
                            {this.props.publication ? <h1>Update Publication</h1> : <h1>Add New Publication</h1>}
                            <br />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Jumbotron>
                                <AvForm onSubmit={this.props.publication ? this.handleUpdate : this.handleSubmit}>
                                    <AvGroup>
                                        <Label className="form-label" for="example">Citation for Publication *</Label>
                                        <AvInput name="citation" id="citation" style={{height: "200px"}} type="textarea" value={this.state.citationValue} placeholder="Enter Publication Citation Here" required onChange={this.citationChange}/>
                                        <AvFeedback className="av-feedback">This Field is Required!</AvFeedback>
                                        <FormText className="form-text" color="muted">
                                            Please be careful which citation you use for this field. Whatever you 
                                            input here will be shown on the Publications Page. Please encase anything
                                            you want Bold within HTML "b" tags and for Italics within "i" tags.
                                        </FormText>
                                    </AvGroup>
                                    <AvGroup>
                                        <Label className="form-label" for="memberEmail">Links</Label>
                                        <AvInput name="links" id="links" value={this.state.linksValue} placeholder="Enter Publication Links here" onChange={this.linksChange}/>
                                        <AvFeedback className="av-feedback">This Field is Required!</AvFeedback>
                                        <FormText className="form-text" color="muted">
                                            If you have any links to provide for this Publication, please type the
                                            URLs separated by a space specifying also where the link comes from 
                                            in the following way: [Name_of_Source];[URL].
                                        </FormText>
                                    </AvGroup>
                                    <AvGroup>
                                        <Label className="form-label" for="memberPosition">Category *</Label>
                                        <CustomInput className="dropdown-input" type="select" name="customSelect" bsSize="lg" onChange={this.categoryChange} required>
                                            {categories.map(category =>(
                                                <option className="dropdown-option">{category}</option>
                                            ))}
                                        </CustomInput>
                                        <AvFeedback className="av-feedback">This Field is Required!</AvFeedback>
                                        <FormText className="form-text" color="muted">
                                            Categories are the different sections in the Publiactions Page. This is required! 
                                            You can put the Publication in an already existing category or type a new one 
                                            and it will be created.
                                        </FormText>
                                    </AvGroup>
                                    {this.props.publication ? <Button outline color="danger" size="lg" block>Update</Button>
                                    : <Button outline color="danger" size="lg" block>Submit</Button> }
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