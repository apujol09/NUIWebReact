import React from 'react';
import './contact.css'; 
import { Container, Row, Col } from 'reactstrap';

class Contact extends React.Component{
    render(){
        return(
            <div>
            
                <Container>
                    <Row><br /><br /></Row>
                    <Row>
                        <Col className="text">
                            <h1>Contact Us</h1>
                            Computer Science Department
                            <br />279 Computer Science Building
                            <br />1100 Center Avenue Mall
                            <br />Fort Collins, CO 80523
                            <br /><b>Email:</b> fortega@colostate.edu 
                            <br /><b>Computer Science Phone Number Phone:</b> (970) 491-5792
                            <br /><b>Computer Science FAX: (970) 491-2466</b>
                        </Col>
                    </Row>
                </Container>
                
                <br />
                <div className="map">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.5918001318782!2d-105.08558228430793!3d40.57269075406271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87694a56c0fe863d%3A0x34cdac708b647feb!2s1100+Center+Ave+Mall%2C+Fort+Collins%2C+CO+80521!5e0!3m2!1sen!2sus!4v1531095678017" 
                        width="65%" 
                        height="100%" 
                        title="Location"
                        frameborder="0"  
                        allowfullscreen>
                    </iframe>
                    
                </div> 
                <br />
            </div>
        )
    }
}

export default Contact;