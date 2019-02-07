import React from 'react';
import './publications.css';
import { Container, Row, Col } from 'reactstrap';

class Publications extends React.Component{
    render(){
        return(
            <div>
                <Container>
                    <Row><br /><br /></Row>
                    <Row>
                        <Col md={{size: 6, offset: 3}}>
                            <h1>Publications</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}


export default Publications;