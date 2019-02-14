import React from 'react';
import './teaching.css'; 
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

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

        this.state.courses.map(course =>{
            if(!semesters.includes(course.semester)){
                semesters.push(course.semester);
            }
        })
        console.log(semesters)

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
                            render.push( 
                                <div key={course.code}>
                                        <Row>
                                            <Col>
                                            <p className="course-title">{course.code}: {course.name}</p>
                                            <p className="course-description"><b>Description:</b> {course.description}</p>
                                            </Col>
                                            <br />
                                        </Row>
                                        <br />
                                </div>)
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
                                        </Col>
                                        <br />
                                    </Row>
                                    <br />
                                </div>)
                        }
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