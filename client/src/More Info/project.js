import React, { Component } from 'react';
import './project.css';
import Domain from '../Utils/misc';
import { Container, Row, Col, CardImg, Button, UncontrolledCollapse } from 'reactstrap';
import axios from 'axios';

class ProjectInfo extends Component {
    constructor (props) {
        super(props)
        this.state = { 
            project: []
        }    
      }


    componentDidMount(){
        axios.get(`/api/projects/${this.props.match.params.id}`)
        .then(res =>{
            this.setState({ project: res.data })
            console.log(res);
        })
    }


    render() {
        return (
            <div>
                <Container>
                    <Row><br /><br /></Row>
                    <Row>
                        <Col sm="5">
                        <CardImg className="p-img" src={this.state.project.image} alt="Card image cap" />
                        </Col>
                        <Col>
                            <h2>{this.state.project.name}</h2>
                            <h3>{this.state.project.status}</h3>
                            <h4 className="p-labs">{this.state.project.labs}</h4>
                            <p className="p-description">{this.state.project.description}</p> 
                        </Col>
                    </Row>
                    <br />
                    <br />
                </Container>
            </div>
        );
    }
}

export default ProjectInfo;