import React, { Component } from 'react';
import './francisco.css';
import { Container, Row, Col, CardImg, Button, UncontrolledCollapse } from 'reactstrap';
import { Image } from 'react-bootstrap';
import axios from 'axios';

class FranciscoInfo extends Component {
    constructor () {
        super()
        this.state = { 
            facultyPHD: [],
            collapsed: true 
        }
        this.toggle = this.toggle.bind(this)      
      }


    componentDidMount(){
        axios.get(`/api/facultyPHD`).then(res => {
            this.setState({ facultyPHD: res.data });
        });
    }

    toggle() {
        this.setState({ collapsed: !this.state.collapsed });
      }


    render() {
        let buttonText = this.state.collapsed ? "Show More" : "Show Less";
        //FIX TEXT, MUST COME FROM DATABASE!!!
        return (
            <div>
                <Container>
                    <Row><br /><br /></Row>
                    <Row>
                        <Col sm="5">
                        <a href={this.state.facultyPHD.length > 0 ? this.state.facultyPHD[0].cv : null}><CardImg className="francisco-img" src={this.state.facultyPHD.length > 0 ? this.state.facultyPHD[0].image : null} alt="Card image cap" /></a>
                        </Col>
                        <Col>
                            <h1>{this.state.facultyPHD.length > 0 ? this.state.facultyPHD[0].name : null}</h1>
                            <h3>{this.state.facultyPHD.length > 0 ? this.state.facultyPHD[0].position : null}</h3>
                            <h4 className="francisco-university">{this.state.facultyPHD.length > 0 ? this.state.facultyPHD[0].university : null}</h4>
                            <h5 className="francisco-email">{this.state.facultyPHD.length > 0 ? this.state.facultyPHD[0].email : null}</h5>
                            <p className="francisco-description">Dr. Francisco R. Ortega is an Assistant Professor at Colorado State University. Dr. Ortega earned his Ph.D. in Computer Science (CS) in the field of Human-Computer Interaction (HCI) and 3D User Interfaces (3DUI) from Florida International University (FIU). He also hold a position of Post-Doc and Visiting Assistant Professor at FIU between February 2015 to July 2018. Broadly speaking, his research has focused on gesture interaction, which includes gesture recognition and elicitation. His main research area focuses on improving user interaction by (a) eliciting (hand and full-body) gesture sets by user elicitation, and (b) developing interactive gesture-recognition algorithms. His secondary research aims to discover how to increase interest for CS in non-CS entry-level college students via virtual and augmented reality games. His research has resulted in multiple peer-reviewed publications in venues such as ACM ISS, ACM SUI, and IEEE 3DUI, among others. He is the first-author of Interaction Design for 3D User Interfaces: The World of Modern Input Devices for Research, Applications, and Game Development book by CRC Press. Dr. Ortega serves as Vertically Integrated Projects coordinator that promotes applied research for undergraduate students across disciplines.</p> 
                            <UncontrolledCollapse toggler="#toggle">
                            <p className="francisco-description">Dr. Ortega is committed to teaching and integrating research in the classroom. He has taught multiple courses including CS capstone, Programming II (Java), Programming III (C), Operating Systems, Principles of Relational Database Management Systems (graduate), Network Management and Control Standards (graduate), Net-Centric (using Python), Web Application Programming, Website Management, and Construction, Windows Programming (C#), Digital Forensics, Advanced Digital Forensics (graduate), Advanced Ethical Hacking (graduate), and Practical Applied Security (graduate).</p>
                            </UncontrolledCollapse>
                            <Button color="success" id="toggle" onClick={this.toggle}>{buttonText}</Button>
                        </Col>
                    </Row>
                    <br />
                </Container>
            </div>
        );
    }
}

export default FranciscoInfo;