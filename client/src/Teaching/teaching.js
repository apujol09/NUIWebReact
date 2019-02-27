import React from 'react';
import './teaching.css'; 
import { Container, Row, Col, Button, UncontrolledCollapse } from 'reactstrap';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import TeachingForm from '../Forms/teaching';
import Delete from '../Forms/delete';
import MarkAsDeleted from '../Forms/markAsDeleted';
import UnmarkAsDeleted from '../Forms/unmarkAsDeleted';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faEye, faEyeSlash } from '@fortawesome/fontawesome-free-solid';

class Teaching extends React.Component{
    
    constructor(props) {
        super(props)
        this.state = {
            courses: [],
            isloggedIn: false
        }
      }

    componentDidMount(){
        axios.get(`/api/teaching`).then(res => {
            this.setState({ courses: res.data });
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

    //TRY TO USE JUMBOTRONS
    render(){
        let semesters = []
        let render = []
        let number = 0

        if(!this.state.isloggedIn){
            this.state.courses.map(course =>{
                if(!semesters.includes(course.semester) && !course.markAsDeleted){
                    semesters.push(course.semester);
                }
            })
        }
        else{
            this.state.courses.map(course =>{
                if(!semesters.includes(course.semester)){
                    semesters.push(course.semester);
                }
            })
        }

        semesters.forEach(semester => {
            if(semesters !== null){
                render.push(
                    <Row>
                        <h2>{semester}</h2>
                        <br />
                        <hr className="teaching-line" />
                    </Row>
                )
                this.state.courses.forEach(course =>{
                    if(course.semester === semester){
                        if(course.link === ''){
                            if(!this.state.isloggedIn){  
                                if(!course.markAsDeleted){
                                    render.push( 
                                        <div key={course.code}>
                                                <Row>
                                                    <Col>
                                                    <p className="course-title">{course.code}: {course.name}</p>
                                                    <p className="course-description"><b>Description:</b> {course.description}</p>
                                                    {this.state.isloggedIn ? 
                                                    <UncontrolledCollapse toggler={"del_toggler_" + number}>
                                                        <Delete class={course} toggle={"del_toggler_" + number}/>
                                                    </UncontrolledCollapse>
                                                    : null
                                                    }
                                                    {this.state.isloggedIn ? 
                                                    <UncontrolledCollapse toggler={"unmark_toggler_" + number}>
                                                        <UnmarkAsDeleted class={course} toggle={"unmark_toggler_" + number} />
                                                    </UncontrolledCollapse>
                                                    : null
                                                    }

                                                    {this.state.isloggedIn ? 
                                                    <UncontrolledCollapse toggler={"mark_toggler_" + number}>
                                                        <MarkAsDeleted class={course} toggle={"mark_toggler_" + number} />
                                                    </UncontrolledCollapse>
                                                    : null
                                                    }
                                                    {this.state.isloggedIn ? 
                                                        <UncontrolledCollapse toggler={"toggler_" + number}>
                                                            <TeachingForm teaching={course} />
                                                        </UncontrolledCollapse>
                                                        : null
                                                    }
                                                    </Col>
                                                    {this.state.isloggedIn && !course.markAsDeleted ?
                                                    (
                                                    <Col md={{size: 1}}>
                                                        <Button color="danger" id={"del_toggler_" + number}><FontAwesomeIcon icon={faTrashAlt} size="2x" /></Button>
                                                        <Button color="warning" id={"mark_toggler_" + number}><FontAwesomeIcon icon={faEyeSlash} size="2x" /></Button>
                                                        <Button color="primary" id={"toggler_" + number}><FontAwesomeIcon icon={faEdit} size="2x" /></Button>
                                                    </Col>
                                                    ) : null}

                                                    {this.state.isloggedIn && course.markAsDeleted ?
                                                    (
                                                    <Col md={{size: 1}}>
                                                        <Button color="danger" id={"del_toggler_" + number}><FontAwesomeIcon icon={faTrashAlt} size="2x" /></Button>
                                                        <Button color="warning" id={"unmark_toggler_" + number}><FontAwesomeIcon icon={faEye} size="2x" /></Button>
                                                        <Button color="primary" id={"toggler_" + number}><FontAwesomeIcon icon={faEdit} size="2x" /></Button>
                                                    </Col>
                                                    ) : null}
                                                    <br />
                                                </Row>
                                                <br />
                                        </div>
                                    )
                                }
                            }
                            else{
                                render.push( 
                                    <div key={course.code}>
                                            <Row>
                                                <Col>
                                                <p className="course-title">{course.code}: {course.name}</p>
                                                <p className="course-description"><b>Description:</b> {course.description}</p>
                                                {this.state.isloggedIn ? 
                                                <UncontrolledCollapse toggler={"del_toggler_" + number}>
                                                    <Delete class={course} toggle={"del_toggler_" + number}/>
                                                </UncontrolledCollapse>
                                                : null
                                                }
                                                {this.state.isloggedIn ? 
                                                <UncontrolledCollapse toggler={"unmark_toggler_" + number}>
                                                    <UnmarkAsDeleted class={course} toggle={"unmark_toggler_" + number} />
                                                </UncontrolledCollapse>
                                                : null
                                                }

                                                {this.state.isloggedIn ? 
                                                <UncontrolledCollapse toggler={"mark_toggler_" + number}>
                                                    <MarkAsDeleted class={course} toggle={"mark_toggler_" + number} />
                                                </UncontrolledCollapse>
                                                : null
                                                }
                                                {this.state.isloggedIn ? 
                                                    <UncontrolledCollapse toggler={"toggler_" + number}>
                                                        <TeachingForm teaching={course} />
                                                    </UncontrolledCollapse>
                                                    : null
                                                }
                                                </Col>
                                                {this.state.isloggedIn && !course.markAsDeleted ?
                                                (
                                                <Col md={{size: 1}}>
                                                    <Button color="danger" id={"del_toggler_" + number}><FontAwesomeIcon icon={faTrashAlt} size="2x" /></Button>
                                                    <Button color="warning" id={"mark_toggler_" + number}><FontAwesomeIcon icon={faEyeSlash} size="2x" /></Button>
                                                    <Button color="primary" id={"toggler_" + number}><FontAwesomeIcon icon={faEdit} size="2x" /></Button>
                                                </Col>
                                                ) : null}

                                                {this.state.isloggedIn && course.markAsDeleted ?
                                                (
                                                <Col md={{size: 1}}>
                                                    <Button color="danger" id={"del_toggler_" + number}><FontAwesomeIcon icon={faTrashAlt} size="2x" /></Button>
                                                    <Button color="warning" id={"unmark_toggler_" + number}><FontAwesomeIcon icon={faEye} size="2x" /></Button>
                                                    <Button color="primary" id={"toggler_" + number}><FontAwesomeIcon icon={faEdit} size="2x" /></Button>
                                                </Col>
                                                ) : null}
                                                <br />
                                            </Row>
                                            <br />
                                    </div>
                                )
                            }
                        }
                        else{
                            if(!this.state.isloggedIn){
                                if(!course.markAsDeleted){
                                    render.push( 
                                        <div key={course.code}>
                                            <Row>
                                                <Col>
                                                <p className="course-title">{course.code}: {course.name}</p>
                                                <p className="course-time"><b>Time:</b> {course.time}</p>
                                                <p className="course-description"><b>Description:</b> {course.description}</p>
                                                <a className="course-link" href={course.link}>{course.code} Website</a>
                                                {this.state.isloggedIn ? 
                                                    <UncontrolledCollapse toggler={"del_toggler_" + number}>
                                                        <Delete class={course} toggle={"del_toggler_" + number}/>
                                                    </UncontrolledCollapse>
                                                    : null
                                                }

                                                {this.state.isloggedIn ? 
                                                <UncontrolledCollapse toggler={"unmark_toggler_" + number}>
                                                    <UnmarkAsDeleted class={course} toggle={"unmark_toggler_" + number} />
                                                </UncontrolledCollapse>
                                                : null
                                                }

                                                {this.state.isloggedIn ? 
                                                <UncontrolledCollapse toggler={"mark_toggler_" + number}>
                                                    <MarkAsDeleted class={course} toggle={"mark_toggler_" + number} />
                                                </UncontrolledCollapse>
                                                : null
                                                }

                                                {this.state.isloggedIn ? 
                                                    <UncontrolledCollapse toggler={"toggler_" + number}>
                                                        <TeachingForm teaching={course} />
                                                    </UncontrolledCollapse>
                                                    : null
                                                }
                                                </Col>
                                                {this.state.isloggedIn && !course.markAsDeleted ?
                                                (
                                                <Col md={{size: 1}}>
                                                    <Button color="danger" id={"del_toggler_" + number}><FontAwesomeIcon icon={faTrashAlt} size="2x" /></Button>
                                                    <Button color="warning" id={"mark_toggler_" + number}><FontAwesomeIcon icon={faEyeSlash} size="2x" /></Button>
                                                    <Button color="primary" id={"toggler_" + number}><FontAwesomeIcon icon={faEdit} size="2x" /></Button>
                                                </Col>
                                                ) : null}

                                                {this.state.isloggedIn && course.markAsDeleted ?
                                                (
                                                <Col md={{size: 1}}>
                                                    <Button color="danger" id={"del_toggler_" + number}><FontAwesomeIcon icon={faTrashAlt} size="2x" /></Button>
                                                    <Button color="warning" id={"unmark_toggler_" + number}><FontAwesomeIcon icon={faEye} size="2x" /></Button>
                                                    <Button color="primary" id={"toggler_" + number}><FontAwesomeIcon icon={faEdit} size="2x" /></Button>
                                                </Col>
                                                ) : null}
                                                
                                                <br />
                                            </Row>
                                            <br />
                                        </div>
                                    )
                                }
                            }
                            else{
                                render.push( 
                                    <div key={course.code}>
                                        <Row>
                                            <Col>
                                            <p className="course-title">{course.code}: {course.name}</p>
                                            <p className="course-time"><b>Time:</b> {course.time}</p>
                                            <p className="course-description"><b>Description:</b> {course.description}</p>
                                            <a className="course-link" href={course.link}>{course.code} Website</a>
                                            {this.state.isloggedIn ? 
                                                <UncontrolledCollapse toggler={"del_toggler_" + number}>
                                                    <Delete class={course} toggle={"del_toggler_" + number}/>
                                                </UncontrolledCollapse>
                                                : null
                                            }

                                            {this.state.isloggedIn ? 
                                            <UncontrolledCollapse toggler={"unmark_toggler_" + number}>
                                                <UnmarkAsDeleted class={course} toggle={"unmark_toggler_" + number} />
                                            </UncontrolledCollapse>
                                            : null
                                            }

                                            {this.state.isloggedIn ? 
                                            <UncontrolledCollapse toggler={"mark_toggler_" + number}>
                                                <MarkAsDeleted class={course} toggle={"mark_toggler_" + number} />
                                            </UncontrolledCollapse>
                                            : null
                                            }

                                            {this.state.isloggedIn ? 
                                                <UncontrolledCollapse toggler={"toggler_" + number}>
                                                    <TeachingForm teaching={course} />
                                                </UncontrolledCollapse>
                                                : null
                                            }
                                            </Col>
                                            {this.state.isloggedIn && !course.markAsDeleted ?
                                            (
                                            <Col md={{size: 1}}>
                                                <Button color="danger" id={"del_toggler_" + number}><FontAwesomeIcon icon={faTrashAlt} size="2x" /></Button>
                                                <Button color="warning" id={"mark_toggler_" + number}><FontAwesomeIcon icon={faEyeSlash} size="2x" /></Button>
                                                <Button color="primary" id={"toggler_" + number}><FontAwesomeIcon icon={faEdit} size="2x" /></Button>
                                            </Col>
                                            ) : null}

                                            {this.state.isloggedIn && course.markAsDeleted ?
                                            (
                                            <Col md={{size: 1}}>
                                                <Button color="danger" id={"del_toggler_" + number}><FontAwesomeIcon icon={faTrashAlt} size="2x" /></Button>
                                                <Button color="warning" id={"unmark_toggler_" + number}><FontAwesomeIcon icon={faEye} size="2x" /></Button>
                                                <Button color="primary" id={"toggler_" + number}><FontAwesomeIcon icon={faEdit} size="2x" /></Button>
                                            </Col>
                                            ) : null}
                                            
                                            <br />
                                        </Row>
                                        <br />
                                    </div>
                                )
                            }
                        }
                    number++;
                    }  
                })  
            }
        });
        return(
            <div>
                <Container>
                    <Row><br /><br /></Row>
                    <Row>
                        <Col md={{size: 6, offset: 3}}>
                            <h1>Courses</h1>
                        </Col>
                        <Col>
                            {this.state.isloggedIn ? <NavLink to="/add-class"><Button outline color="info">Add new Class</Button></NavLink> : null}
                        </Col>
                    </Row>
                    <Row>
                        <br />
                    </Row>
                    {render}
                </Container>
            </div>
        )
    }
}

export default Teaching;