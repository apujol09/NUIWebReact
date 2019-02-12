import React from 'react';
import './projects.css';
import { Container, Row, Col, Jumbotron, CardImg, Button } from 'reactstrap';
import axios from 'axios';
import Domain from '../Utils/misc';
import { NavLink } from 'react-router-dom';

require('dotenv').config({path: '../../.env'})
class Projects extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            projects: [],
            isloggedIn: false
        }
      }

    componentDidMount(){
        axios.get(`/api/projects`).then(res => {
            this.setState({ projects: res.data });
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
        
        console.log(process.env.DOMAIN);
        let render = []
        let backgrounds = ["project-jumbotron-blue", "project-jumbotron-green", "project-jumbotron-red", "project-jumbotron-violet", "project-jumbotron-gray"]
        if(this.state.projects){
            let index = 0
            this.state.projects.forEach(project => {
                if(index === backgrounds.length){
                    index = 0
                }
                //const image = process.env.DOMAIN
                render.push(
                    <Jumbotron key={project._id} className={backgrounds[index]}>
                        <Container>
                            <Row>
                                <Col sm="5">
                                    <CardImg src={project.image} />
                                </Col>
                                <Col>
                                    <p className="project-name">{project.name}</p>
                                    <p className="project-status">{project.status}</p>
                                    <p className="project-labs">{project.labs}</p>
                                    <p className="project-description">{project.description}</p>                           </Col>
                            </Row>
                            <Row>
                                {project.website ? (<Col><a href={project.website}><Button color="info">Website</Button></a></Col>) : null}
                                {project.publication ? (<Col><a href={project.publication}><Button color="success">Publication</Button></a></Col>) : null}
                                {project.paper ? (<Col><a href={Domain + project.paper}><Button color="danger">Paper</Button></a></Col>) : null}
                                {project.github ? (<Col><a href={project.github}><Button color="secondary">Github</Button></a></Col>) : null}
                            </Row>
                        </Container>
                    </Jumbotron>
                )
                index++;
            })
        }
        return(
            <div>
                <Container>
                    <Row><br /><br /></Row>
                    <Row>
                        <Col md={{size: 6, offset: 3}}>
                            <h1>Projects</h1>
                        </Col>
                        <Col>{this.state.isloggedIn ? <NavLink to="/add-project"><Button color="info">Add New Project</Button></NavLink> : null}</Col>
                    </Row>
                    <Row>
                        <hr className="event-line" />
                    </Row>
                    <Row>
                        {render}
                        <br />
                        <br />
                    </Row>
                </Container>
            </div>
        )
    }
}


export default Projects;