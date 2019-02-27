import React from 'react';
import './projects.css';
import { Container, Row, Col, Jumbotron, CardImg, Button, UncontrolledCollapse, Alert } from 'reactstrap';
import axios from 'axios';
import Domain from '../Utils/misc';
import Delete from '../Forms/delete';
import MarkAsDeleted from '../Forms/markAsDeleted';
import UnmarkAsDeleted from '../Forms/unmarkAsDeleted';
import ProjectForm from '../Forms/projects';
import { NavLink, Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faEye, faEyeSlash} from '@fortawesome/fontawesome-free-solid';

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
        let number = 0
        let render = []
        let backgrounds = ["project-jumbotron-blue", "project-jumbotron-green", "project-jumbotron-red", "project-jumbotron-violet", "project-jumbotron-gray"]
        if(this.state.projects){
            let index = 0
            this.state.projects.forEach(project => {
                if(index === backgrounds.length){
                    index = 0
                }
                if(!this.state.isloggedIn){
                    if(!project.markAsDeleted){
                //const image = process.env.DOMAIN
                        render.push(
                            <div>
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
                                                <p className="project-description">{project.description}</p>                           
                                            </Col>
                                        </Row>
                                        <Row>
                                            {project.website ? (<Col><a href={project.website}><Button color="info">Website</Button></a></Col>) : null}
                                            {project.publication ? (<Col><a href={project.publication}><Button color="success">Publication</Button></a></Col>) : null}
                                            {project.paper ? (<Col><a href={project.paper}><Button color="danger">Paper</Button></a></Col>) : null}
                                            {project.github ? (<Col><a href={project.github}><Button color="secondary">Github</Button></a></Col>) : null}
                                            <Col>
                                                <Link to={`/projects/${project._id}`} project={project}><Button color="warning">More Info</Button></Link>
                                            </Col>
                                            {this.state.isloggedIn ?
                                            <Col>
                                                <Button color="primary" id={"toggler_" + number}><FontAwesomeIcon icon={faEdit} size="2x"/></Button> 
                                            </Col>
                                            : null}

                                            {this.state.isloggedIn && !project.markAsDeleted ?
                                            <Col>
                                                <Button color="warning" id={"mark_toggler_" + number}><FontAwesomeIcon icon={faEyeSlash} size="2x"/></Button> 
                                            </Col>
                                            : null}

                                            {this.state.isloggedIn && project.markAsDeleted ?
                                            <Col>
                                                <Button color="warning" id={"unmark_toggler_" + number}><FontAwesomeIcon icon={faEye} size="2x"/></Button> 
                                            </Col>
                                            : null}

                                            {this.state.isloggedIn ?
                                            <Col>
                                                <Button color="danger" id={"del_toggler_" + number}><FontAwesomeIcon icon={faTrashAlt} size="2x"/></Button> 
                                            </Col>
                                            : null}
                                        </Row>
                                    </Container>
                                </Jumbotron>
                                {this.state.isloggedIn ? 
                                <UncontrolledCollapse toggler={"unmark_toggler_" + number}>
                                    <UnmarkAsDeleted project={project} toggle={"unmark_toggler_" + number} />
                                </UncontrolledCollapse>
                                : null
                                }
                                {this.state.isloggedIn ? 
                                <UncontrolledCollapse toggler={"mark_toggler_" + number}>
                                    <MarkAsDeleted project={project} toggle={"mark_toggler_" + number} />
                                </UncontrolledCollapse>
                                : null
                                }
                                {this.state.isloggedIn ? 
                                <UncontrolledCollapse toggler={"del_toggler_" + number}>
                                    <Delete project={project} toggle={"del_toggler_" + number}/>
                                </UncontrolledCollapse>
                                : null
                                }
                                {this.state.isloggedIn ? 
                                <UncontrolledCollapse toggler={"toggler_" + number}>
                                    <ProjectForm project={project} />
                                </UncontrolledCollapse>
                                : null
                                }
                            </div>
                        )
                    }
                }
                else{
                    render.push(
                        <div>
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
                                            <p className="project-description">{project.description}</p>                           
                                        </Col>
                                    </Row>
                                    <Row>
                                        {project.website ? (<Col><a href={project.website}><Button color="info">Website</Button></a></Col>) : null}
                                        {project.publication ? (<Col><a href={project.publication}><Button color="success">Publication</Button></a></Col>) : null}
                                        {project.paper ? (<Col><a href={project.paper}><Button color="danger">Paper</Button></a></Col>) : null}
                                        {project.github ? (<Col><a href={project.github}><Button color="secondary">Github</Button></a></Col>) : null}
                                        <Col>
                                            <Link to={`/projects/${project._id}`} project={project}><Button color="warning">More Info</Button></Link>
                                        </Col>
                                        {this.state.isloggedIn ?
                                        <Col>
                                            <Button color="primary" id={"toggler_" + number}><FontAwesomeIcon icon={faEdit} size="2x"/></Button> 
                                        </Col>
                                        : null}

                                        {this.state.isloggedIn && !project.markAsDeleted ?
                                        <Col>
                                            <Button color="warning" id={"mark_toggler_" + number}><FontAwesomeIcon icon={faEyeSlash} size="2x"/></Button> 
                                        </Col>
                                        : null}

                                        {this.state.isloggedIn && project.markAsDeleted ?
                                        <Col>
                                            <Button color="warning" id={"unmark_toggler_" + number}><FontAwesomeIcon icon={faEye} size="2x"/></Button> 
                                        </Col>
                                        : null}

                                        {this.state.isloggedIn ?
                                        <Col>
                                            <Button color="danger" id={"del_toggler_" + number}><FontAwesomeIcon icon={faTrashAlt} size="2x"/></Button> 
                                        </Col>
                                        : null}
                                    </Row>
                                </Container>
                            </Jumbotron>
                            {this.state.isloggedIn ? 
                                <UncontrolledCollapse toggler={"unmark_toggler_" + number}>
                                    <UnmarkAsDeleted project={project} toggle={"unmark_toggler_" + number} />
                                </UncontrolledCollapse>
                                : null
                            }
                            {this.state.isloggedIn ? 
                            <UncontrolledCollapse toggler={"mark_toggler_" + number}>
                                <MarkAsDeleted project={project} toggle={"mark_toggler_" + number} />
                            </UncontrolledCollapse>
                            : null
                            }
                            {this.state.isloggedIn ? 
                            <UncontrolledCollapse toggler={"del_toggler_" + number}>
                                <Delete project={project} toggle={"del_toggler_" + number}/>
                            </UncontrolledCollapse>
                            : null
                            }
                            {this.state.isloggedIn ? 
                            <UncontrolledCollapse toggler={"toggler_" + number}>
                                <ProjectForm project={project} />
                            </UncontrolledCollapse>
                            : null
                            }
                        </div>
                    )
                }
                index++;
                number++;
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
                        <Col>{this.state.isloggedIn ? <NavLink to="/add-project"><Button outline color="info">Add New Project</Button></NavLink> : null}</Col>
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