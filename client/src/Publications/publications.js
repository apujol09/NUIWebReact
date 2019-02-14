import React from 'react';
import './publications.css';
import Domain from '../Utils/misc';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import PublicationForm from '../Forms/publication';

class Publications extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            publications: [],
            isloggedIn: false
        }
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

    render(){
        let render = []
        let publicationTypes = []
        let number = 1

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
                    let text = publication.name.split("'");
                    let bold = text[1]
                    if(publication.category === type && publication.links === []){
                        render.push(
                            <div className="publication-div">
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
                                    <Col>
                                        [<a className="publication-link" href={Domain + link.url}>{link.from}</a>]
                                    </Col>
                                )
                            }
                            else{
                                publicationLinks.push(
                                    <Col>
                                        [<a className="publication-link" href={link.url}>{link.from}</a>]
                                    </Col>
                                )
                            }
                            
                        })
                        render.push(
                            <div>
                                <Jumbotron className="publication-jumbotron">
                                    <Container>
                                        <Row>
                                            <p className="publication-text" dangerouslySetInnerHTML={{ __html: number + ". " + publication.name }}></p>
                                            
                                        </Row>
                                        <Row className="links-row">
                                        {publicationLinks}
                                        </Row>
                                    </Container>
                                </Jumbotron>
                            </div>
                        )
                        number++;
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