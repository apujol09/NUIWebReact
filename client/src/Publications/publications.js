import React from 'react';
import './publications.css';
import Domain from '../Utils/misc';
import { Container, Row, Col, Jumbotron, Button, UncontrolledCollapse } from 'reactstrap';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import PublicationForm from '../Forms/publication';
import Delete from '../Forms/delete';
import MarkAsDeleted from '../Forms/markAsDeleted';
import UnmarkAsDeleted from '../Forms/unmarkAsDeleted';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faEye, faEyeSlash } from '@fortawesome/fontawesome-free-solid';

class Publications extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            publications: [],
            publicationCategories: [],
            isloggedIn: false,
        }
      }

    componentDidMount(){
        axios.get(`/api/publications`).then(res => {
            this.setState({ publications: res.data });
        });

        axios.get(`/api/publications/categories`).then(res => {
            this.setState({ publicationCategories: res.data });

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

    render(){
        let render = []
        let publicationTypes = []
        let number = 1

        if(!this.state.isloggedIn){
            this.state.publicationCategories.map(category =>{
                this.state.publications.map(publication =>{
                    if(!publicationTypes.includes(category.name) && publication.category === category.name && !publication.markAsDeleted){
                        publicationTypes.push(category.name);
                    }
                })
            })
        }
        else{
            this.state.publicationCategories.map(category =>{
                this.state.publications.map(publication =>{
                    if(!publicationTypes.includes(category.name) && publication.category === category.name){
                        publicationTypes.push(category.name);
                    }
                })
            })
        }
        

        if(publicationTypes !== []){
            publicationTypes.forEach(type =>{
                render.push(
                    <Row>
                        <Col>
                            <h2 className="category-title">{type}</h2>
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
                        let publicationLinks = []
                        publication.links.forEach(link =>{
                            if(link.from === "PDF"){
                                publicationLinks.push(
                                    <p className="links">[<a className="publication-link" href={Domain + link.url}>{link.from}</a>]&nbsp;&nbsp;</p>
                                )
                            }
                            else{
                                publicationLinks.push(
                                    <p className="links">[<a className="publication-link" href={link.url}>{link.from}</a>]&nbsp;&nbsp;</p>
                                )
                            }
                            
                        })
                        if(!this.state.isloggedIn){
                            if(!publication.markAsDeleted){                        
                                render.push(
                                    <div key={publication._id}>
                                        <Jumbotron className="publication-jumbotron">
                                            <Container>
                                                {this.state.isloggedIn && !publication.markAsDeleted ? 
                                                <Row>
                                                    <Col md={{size: 3, offset: 10}}>
                                                        <Button color="danger" id={"del_toggler_" + number}><FontAwesomeIcon icon={faTrashAlt} size="2x"/></Button>{'  '}
                                                        <Button color="warning" id={"mark_toggler_" + number}><FontAwesomeIcon icon={faEyeSlash} size="2x"/></Button>
                                                    </Col>
                                                </Row> : null}
                                                {this.state.isloggedIn && publication.markAsDeleted ? 
                                                <Row>
                                                    <Col md={{size: 3, offset: 10}}>
                                                        <Button color="danger" id={"del_toggler_" + number}><FontAwesomeIcon icon={faTrashAlt} size="2x"/></Button>{'  '}
                                                        <Button color="warning" id={"unmark_toggler_" + number}><FontAwesomeIcon icon={faEye} size="2x"/></Button>
                                                    </Col>
                                                </Row> : null}
                                                <Row md={{size: 12}}>
                                                    <p className="publication-text" dangerouslySetInnerHTML={{ __html: number + ". " + publication.name}}></p>
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
                                        <UncontrolledCollapse toggler={"unmark_toggler_" + number}>
                                            <UnmarkAsDeleted publication={publication} toggle={"unmark_toggler_" + number} />
                                        </UncontrolledCollapse>
                                        : null
                                        }
                                        {this.state.isloggedIn ? 
                                        <UncontrolledCollapse toggler={"mark_toggler_" + number}>
                                            <MarkAsDeleted publication={publication} toggle={"mark_toggler_" + number} />
                                        </UncontrolledCollapse>
                                        : null
                                        }
                                        {this.state.isloggedIn ? 
                                            <UncontrolledCollapse toggler={"del_toggler_" + number}>
                                                <Delete publication={publication} toggle={"del_toggler_" + number}/>
                                            </UncontrolledCollapse>
                                        : null}

                                        {this.state.isloggedIn ? 
                                            <UncontrolledCollapse toggler={"toggler_" + number}>
                                                <PublicationForm publication={publication} />
                                            </UncontrolledCollapse>
                                        : null}
                                        
                                    </div>
                                )
                                number++;
                            }
                        }
                        else{
                            render.push(
                                <div key={publication._id}>
                                    <Jumbotron className="publication-jumbotron">
                                        <Container>
                                            {this.state.isloggedIn && !publication.markAsDeleted ? 
                                            <Row>
                                                <Col md={{size: 3, offset: 10}}>
                                                    <Button color="danger" id={"del_toggler_" + number}><FontAwesomeIcon icon={faTrashAlt} size="2x"/></Button>{'  '}
                                                    <Button color="warning" id={"mark_toggler_" + number}><FontAwesomeIcon icon={faEyeSlash} size="2x"/></Button>
                                                </Col>
                                            </Row> : null}
                                            {this.state.isloggedIn && publication.markAsDeleted ? 
                                            <Row>
                                                <Col md={{size: 3, offset: 10}}>
                                                    <Button color="danger" id={"del_toggler_" + number}><FontAwesomeIcon icon={faTrashAlt} size="2x"/></Button>{'  '}
                                                    <Button color="warning" id={"unmark_toggler_" + number}><FontAwesomeIcon icon={faEye} size="2x"/></Button>
                                                </Col>
                                            </Row> : null}
                                            <Row md={{size: 12}}>
                                                <p className="publication-text" dangerouslySetInnerHTML={{ __html: number + ". " + publication.name}}></p>
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
                                    <UncontrolledCollapse toggler={"unmark_toggler_" + number}>
                                        <UnmarkAsDeleted publication={publication} toggle={"unmark_toggler_" + number} />
                                    </UncontrolledCollapse>
                                    : null
                                    }
                                    {this.state.isloggedIn ? 
                                    <UncontrolledCollapse toggler={"mark_toggler_" + number}>
                                        <MarkAsDeleted publication={publication} toggle={"mark_toggler_" + number} />
                                    </UncontrolledCollapse>
                                    : null
                                    }
                                    {this.state.isloggedIn ? 
                                        <UncontrolledCollapse toggler={"del_toggler_" + number}>
                                            <Delete publication={publication} toggle={"del_toggler_" + number}/>
                                        </UncontrolledCollapse>
                                    : null}

                                    {this.state.isloggedIn ? 
                                        <UncontrolledCollapse toggler={"toggler_" + number}>
                                            <PublicationForm publication={publication} />
                                        </UncontrolledCollapse>
                                    : null}
                                    
                                </div>
                            )
                            number++;
                        }
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