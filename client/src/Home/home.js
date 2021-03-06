import React from 'react';
import './home.css'; 
import proom from '../assets/images/general/proom.png';
import background from "../assets/videos/background.jpg";
import logo from '../assets/images/general/openhid-logo.png';
import { Container, Row, Col } from 'reactstrap';
import Carousel from './carousel';

class Home extends React.Component{
    render(){
        return(
            <div>
                <Container className="home-container" fluid>
                    <Row><br /><br /></Row>
                    <Row>
                        <Col md={{size: 7}}>
                            <br />
                            <Carousel />
                        </Col>
                        <Col>
                            <h1>NUI Lab <br />
                            <a className="home-link" href="http://www.cs.colostate.edu/cstop/">CSU's</a> Natural User Interaction Lab</h1>
                            <br />
                            <article className = "text">
                                <h4>What is the NUI Lab?</h4>
                                <p>NUI Lab, (Formerly known as OpenHID), founded in January 2015, is dedicated to the research and development of 3D User Interfaces including selection, manipulation and navigation, Gesture User Interfaces including recognition and elicitation, Multi-Modal Interaction, and Virtual &amp; Augmented Reality, among other research interest we have. In general, we concentrate in the research of Gesture User Interfaces and how those along with other modalities may improve the user's interaction. We strive to advance Human-Centered Computing state of the art.</p>
                                <p>NUI Lab was originally founded at Florida International University (with the initial help of FIU's High Performance Database Research Center) and now resides in its new home at Colorado State University in the Computer Science Department.  The lab founder and director is Francisco R. Ortega, Ph.D. NUI Lab is part of a larger group, <a className="home-link" href="https://cwc.cs.colostate.edu/">Communicating with Computers (CWC)</a>.</p>
                            </article>
                            <br />
                            <br />
                            <br />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home;