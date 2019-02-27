import React, { Component } from 'react';
import './project.css';
import Domain from '../Utils/misc';
import ProjectForm from '../Forms/projects';
import { Container, Row, Col, CardImg, Button, UncontrolledCollapse } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/fontawesome-free-solid';
import axios from 'axios';

class ProjectInfo extends Component {
    constructor (props) {
        super(props)
        this.state = { 
            project: [],
            isloggedIn: false
        }    
      }


    componentDidMount(){
        axios.get(`/api/projects/${this.props.match.params.id}`)
        .then(res =>{
            this.setState({ project: res.data })
            console.log(res);
        })

        axios.get(`/api/auth`).then(res => {
            if(res.data.isAuth === true){
                this.setState({ isloggedIn: true });
            }
            else{
                this.setState({ isloggedIn: false });
            }
        });
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
                            <p className="p-description" dangerouslySetInnerHTML={{ __html: this.state.project.description}}></p>
                            {this.state.isloggedIn ? 
                            <UncontrolledCollapse toggler={"toggler"}>
                                <ProjectForm project={this.state.project} />
                            </UncontrolledCollapse> 
                            : null} 
                        </Col>
                        {this.state.isloggedIn ? 
                        <Col md={{size: 1}}><Button id={"toggler"} color="primary"><FontAwesomeIcon icon={faEdit} /></Button></Col>
                        : null}
                    </Row>
                    <br />
                    <br />
                </Container>
            </div>
        );
    }
}

export default ProjectInfo;