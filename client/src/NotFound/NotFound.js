import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const NotFound = () => {
    return(
       <div>
        <Container>
               <Row><br /><br /></Row>
               <Row>
                   <Col md={{size: 6, offset: 3}}>
                        <h1 style={{color: "red"}}>Whooooops. This page doesn't exist!</h1>
                   </Col>
               </Row>
            </Container>    
       </div>
    )
}

export default NotFound;