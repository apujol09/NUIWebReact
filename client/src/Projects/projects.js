import React from 'react';
import './projects.css';
import { Container, Row, Col } from 'reactstrap';

class Projects extends React.Component{
    render(){
        return(
            <div>
                <Container>
                    <Row><br /><br /></Row>
                    <Row>
                        <Col md={{size: 6, offset: 3}}>
                        <h1>Projects</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}


export default Projects;