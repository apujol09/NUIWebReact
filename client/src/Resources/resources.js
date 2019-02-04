import React from 'react';
import './resources.css';
import { Container, Row, Col } from 'reactstrap';

class Resources extends React.Component{
    render(){
        return(
            <div>
            <Container className="resources-container">
                    <Row><br /><br /></Row>
                    <Row>
                        <h1 className="">Resources</h1>
                    </Row>
                    <Row>
                        <h3>Links</h3>
                    </Row>
                    <Row>
                        <ul className="link-list">
                            <li><a className="res-link" href="https://www.una.edu/writingcenter/docs/Writing-Resources/Comparing%20the%20Annotated%20Bibliography%20to%20the%20Literature%20Review.pdf">Comparing the Annotated Bibliography to the Literature Review </a></li>
                            <li><a className="res-link" href="https://users.ece.cmu.edu/~koopman/essays/abstract.html">How to Write an Abstract Philip Koopman</a></li>
                            <li><a className="res-link" href="http://hispanicsincomputing.org/">Hispanics in Computing</a></li>
                        </ul>
                    </Row>
                    <Row>
                        <h3>Conferences</h3>
                    </Row>
                    <Row>
                        <Col className="res-col" sm="3">
                            <a href="http://www.siggraph.org/"><img className="refImg" src="http://nuilab.org/assets/conferences/acm-siggraph.svg" /></a>
                        </Col>
                        <Col className="res-col" sm="3">
                            <a href="http://www.ieee.org/conferences_events/index.html"><img className="refImg" src="http://nuilab.org/assets/conferences/ieee.svg" /></a>
                        </Col>
                        <Col className="res-col" sm="3">
                            <a href="https://chi2016.acm.org/wp/"><img className="refImg" src="http://nuilab.org/assets/conferences/chi.svg" /></a>
                        </Col>
                        <Col className="res-col" sm="3">
                            <a href="https://cscw.acm.org/2017/"><img className="refImg" src="http://nuilab.org/assets/conferences/cscw.png" /></a>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="3">
                        </Col>
                        <Col className="res-col" sm="3">
                        <a href="http://sui-symposium.org/"><img className="refImg" src="http://nuilab.org/assets/conferences/sui.svg" /></a>
                        </Col>
                        <Col className="res-col" sm="3">
                            <a href="http://3dui.org/"><img className="refImg" src="http://nuilab.org/assets/conferences/3dui.png" /></a>
                        </Col>
                        <Col sm="3">
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </Container>
            </div>
        )
    }
}


export default Resources;