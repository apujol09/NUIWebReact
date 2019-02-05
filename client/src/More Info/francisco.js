import React, { Component } from 'react';
import './francisco.css';
import { Container, Row, Col, CardImg, Button, UncontrolledCollapse } from 'reactstrap';
import { Image } from 'react-bootstrap';
import axios from 'axios';

class FranciscoInfo extends Component {
    constructor () {
        super()
        this.state = { 
            collapsed: true, 
            facultyPHD: []
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
        let facultyPHD = this.state.facultyPHD.map(person =>{
            return( 
                <Col key={person._id} md={{ size: 6, offset: 3 }}>
                    <h1>{person.name}</h1>
                </Col>
            )
        })
        //FIX TEXT, MUST COME FROM DATABASE!!!
        return (
            <div>
                <Container>
                    <Row><br /><br /></Row>
                    <Row>
                        <Col sm="5">
                        <a href="http://nuilab.org/assets/papers/ortega-cv-new.pdf"><CardImg className="francisco-img" src="https://lh3.googleusercontent.com/k1A3nOtq9uWkS54rge_r3momYU44aNTUlRfYCGAb5qS5qGAf7F5L_B3QyCq-YmKvM4ks8xoyeeWJ8rRzJVBJB3RR5apVLG08mP-7Hz2t4W7IiwkHejfyOlnr5FhiqAT3IL0wA4-Q-Z0rjY1lBY0sPB8CmpnIMTVS05sbOt7XFqvszOnwNzwW6sePGhG-IrgbJcS1GAhChtH1CJTSEVmLo5-WaSyvwCr1SL_rpoFfJsLCPE8-OGlFXwumdWM8ef8a-WW_xD_UOmwckdhcR1Xpsb2QAX5JCCG18XBRV0OZcC1pDqFmR3r13DDP6pGeSAfpA913ylwjV5tqqvcjlzF_mTBnawjj0lrYZGRHa6Mbcz3vTkZKlK1V6TF6kTGgbkj14tipZL2iKzQCXrUQhqLD9uqWxPs1hNCoe0KGr3jN9-Gffc_wBYVhQbPPmESiyz3ZG5ISIHWVEqfBICsEHOCbC_WXlQRB3VowI-zO2b7gWPZhQOaUebYaEA2Ec6DCtHy2zYMdffEMxw0rDAl_uzcTKOyXNqbRjoe1p97tJT_vP4WUlI9lBXDDNbJc1g37iRhydq4JXm6R0CYT9eS4p0L3rPkUCzwOmZjNBGCGEIng_Fu7IYaC1ueLjx0KLD0TCL4FpTUIKH2npRnb_6Hyl5jYibA=s800-no" alt="Card image cap" /></a>
                        </Col>
                        <Col className="float-right">
                            <h1>Francisco R. Ortega</h1>
                            <h3>Assistant Professor &amp; Director of NUI Lab</h3>
                            <h4 className="francisco-university">Colorado State University (Fort Collins, CO)</h4>
                            <h5 className="francisco-email">fortega@colostate.edu</h5>
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