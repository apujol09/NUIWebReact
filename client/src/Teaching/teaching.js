import React from 'react';
import './teaching.css'; 
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';

class Teaching extends React.Component{
    
    constructor(props) {
        super(props)
        this.state = {
            courses: []
        }
        this.separateBySemester = this.separateBySemester.bind(this);
      }

    componentDidMount(){
        axios.get(`/api/teaching`).then(res => {
            this.setState({ courses: res.data });
        });
    }

    separateBySemester(){
        
    }

    //TRY TO USE JUMBOTRONS
    render(){
        let semesters = []
        let render = []

        this.state.courses.map(course =>{
            semesters.push(course.semester);
        })

        semesters.forEach(semester => {
            if(semesters !== null){
                this.state.courses.forEach(course =>{
                    if(course.semester === semester){
                        if(course.link === ''){
                            render.push( 
                                <div key={course.code}>
                                    <Row>
                                        <h2>{semester}</h2>
                                        <br />
                                        <hr className="teaching-line" />
                                    </Row>
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
                                        <h2>{semester}</h2>
                                        <br />
                                        <hr className="teaching-line" />
                                    </Row>
                                    <Row>
                                        <Col>
                                        <p className="course-title">{course.code}: {course.name}</p>
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