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
                        <h1>Publications</h1>
                    </Row>
                </Container>
            </div>
        )
    }
}


export default Publications;