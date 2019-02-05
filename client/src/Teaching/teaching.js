import React from 'react';
import './teaching.css'; 
import { Container, Row, Col } from 'reactstrap';

class Teaching extends React.Component{
    render(){
        return(
            <div>
                <Container>
                    <Row><br /><br /></Row>
                    <Row>
                        <h1>Classes</h1>
                        <br />
                        <hr />
                    </Row>
                    <Row>
                        <h2>Fall 2018</h2>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Teaching;