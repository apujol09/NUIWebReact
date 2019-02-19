import React from 'react';
import './publications.css';
import Domain from '../Utils/misc';
import { Container, Row, Col, Jumbotron, Button, UncontrolledCollapse, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import PublicationForm from '../Forms/publication';
import Delete from '../Forms/delete';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/fontawesome-free-solid';

var mongoose = require("mongoose")
class Publications extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            publications: [],
            isloggedIn: false,
            modal: false
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.toggle = this.toggle.bind(this);
      }

    componentDidMount(){
        axios.get(`/api/publications`).then(res => {
            this.setState({ publications: res.data });
        });

        axios.get(`/api/auth`).then(res => {
            if(res.data.isAuth === true){
                this.setState({ isloggedIn: true });
            }
            else{
                this.setState({ isloggedIn: false });
            }
        });

    }

    handleDelete(e){
        axios.delete(`/api/publications/${e.target.id}`).then(res => {
            if(res.data.success === true){
                console.log(`Delete of item ${e.target.id} Successful!`)
                window.location.reload();
            }
            else{
                console.log("Delete Failed!")
                console.log(res)
            }
        });
    }

    toggle(){
        this.setState({ modal: !this.state.modal });
    }

    render(){
        let render = []
        let publicationTypes = []
        let IDs = []
        let number = 1
        let a = 0

        this.state.publications.map(publication =>{
            if(!publicationTypes.includes(publication.category)){
                publicationTypes.push(publication.category);
            }
        })

        if(publicationTypes !== []){
            publicationTypes.forEach(type =>{
                render.push(
                    <Row>
                        <Col>
                            <h2>{type}</h2>
                            <br />
                        </Col>
                    </Row>
                )
                this.state.publications.forEach(publication =>{
                    if(publication.category === type && publication.links === []){
                        render.push(
                            <div className="publication-div">
                                <br />
                                <Jumbotron className="publication-jumbotron">
                                    <Container>
                                        <Row>
                                            <p className="publication-text" dangerouslySetInnerHTML={{ __html: number + ". " + publication.name }}></p>
                                        </Row>
                                    </Container>
                                </Jumbotron>
                            </div>
                        )
                        number++;
                    }
                    else if(publication.category === type && publication.links !== []){
                        IDs.push({id: publication._id})
                        let publicationLinks = []
                        publication.links.forEach(link =>{
                            if(link.from === "PDF"){
                                publicationLinks.push(
                                    <Col>
                                        <p className="links">[<a className="publication-link" href={Domain + link.url}>{link.from}</a>]</p>
                                    </Col>
                                )
                            }
                            else{
                                publicationLinks.push(
                                    <Col>
                                        <p className="links">[<a className="publication-link" href={link.url}>{link.from}</a>]</p>
                                    </Col>
                                )
                            }
                            
                        })
                        render.push(
                            <div key={publication._id}>
                                <Jumbotron className="publication-jumbotron">
                                    <Container>
                                        {this.state.isloggedIn ? 
                                        <Row>
                                            <Col md={{size: 2, offset: 11}}>
                                                <Button color="danger" onClick={this.toggle}><FontAwesomeIcon icon={faTrashAlt} size="2x"/></Button>
                                            </Col>
                                        </Row> : null}
                                        {this.state.isloggedIn ? 
                                            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                                                <ModalHeader toggle={this.toggle}>WARNING!</ModalHeader>
                                                    <ModalBody>
                                                        You are about to permanently delete an item from the Database. Are you sure you want to do this?
                                                    </ModalBody>
                                                <ModalFooter>
                                                    <Button color="danger" onClick={() => {this.handleDelete(IDs[(number-1)].id)}} id={IDs[number-1].id}>YES</Button>{' '}
                                                    <Button color="secondary" onClick={this.toggle}>NO</Button>
                                                </ModalFooter>
                                            </Modal>
                                        : null}
                                        <Row md={{size: 12}}>
                                            <p className="publication-text" dangerouslySetInnerHTML={{ __html: number + ". " + publication.name }}></p>
                                        </Row>
                                        <Row className="links-row">
                                            {publicationLinks}
                                        </Row>
                                        <Row>
                                            <Col md={{size: 2, offset: 11}}>
                                            {this.state.isloggedIn ? <Button color="primary" id={"toggler_" + number}><FontAwesomeIcon icon={faEdit} size="2x"/></Button> : null}
                                            </Col>
                                        </Row>
                                    </Container>
                                </Jumbotron>
                                {this.state.isloggedIn ? 
                                <UncontrolledCollapse toggler={"toggler_" + number}>
                                    <PublicationForm publication={publication} />
                                </UncontrolledCollapse>
                                :null
                                }
                                
                            </div>
                        )
                        number++;
                        a++;
                        console.log(a)
                    }
                })
            })
        }
        
        return(
            <div>
                <Container>
                    <Row><br /><br /></Row>
                    <Row>
                        <Col md={{size: 6, offset: 3}}>
                            <h1>Publications</h1>
                        </Col>
                        <Col>
                            {this.state.isloggedIn ? <NavLink to="/add-publication"><Button outline color="info">Add new Publication</Button></NavLink> : null}
                        </Col>
                    </Row>
                    <Row>
                        <hr className="publications-line" />
                    </Row>
                    <Row>
                        {render}
                    </Row>
                </Container>
            </div>
        )
    }
}


export default Publications;