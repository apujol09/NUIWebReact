import React from 'react';
import './publications.css';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import axios from 'axios';

class Publications extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            publications: []
        }
      }

    componentDidMount(){
        axios.get(`/api/publications`).then(res => {
            this.setState({ publications: res.data });
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
            console.log(this.state.publications)
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
                                <Jumbotron className="publication-jumbotron">
                                    <Container>
                                        <Row>
                                            <p className="publication-text">{number + '. ' + publication.name}</p>
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
                            publicationLinks.push(
                                <Col>
                                    [<a className="publication-link" href={link.url}>{link.from}</a>]
                                </Col>
                            )
                        })
                        render.push(
                            <div>
                                <Jumbotron className="publication-jumbotron">
                                    <Container>
                                        <Row>
                                            <p className="publication-text">{number + '. ' + publication.name}</p>
                                        </Row>
                                        <Row>
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