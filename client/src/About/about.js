import React from 'react';
import './about.css';
import map from '../assets/images/general/map.svg'
import axios from 'axios';
import Members from './member';
import Affiliated from './affiliated';
import Former from './former';
import FacultyPHD from './facultyPHD';
import FacultyCSU from './facultyCSU';
import FacultyFIU from './facultyFIU';
import Carousel from './carousel';
import { Container, Row, Col } from 'reactstrap';


class About extends React.Component{

    state={
        facultyPHD: [],
        facultyCSU: [],
        facultyFIU: [],
        members: [],
        affiliated: [],
        former: [],
        toggleSecondImage: false,
        isLoading: true
    };

    

    componentDidMount(){
        axios.get(`/api/members`).then(res => {
            console.log(res);
            this.setState({ members: res.data });
        });

        axios.get(`/api/facultyPHD`).then(res => {
            console.log(res);
            this.setState({ facultyPHD: res.data });
        });

        axios.get(`/api/facultyCSU`).then(res => {
            console.log(res);
            this.setState({ facultyCSU: res.data });
        });

        axios.get(`/api/facultyFIU`).then(res => {
            console.log(res);
            this.setState({ facultyFIU: res.data });
        });

        axios.get(`/api/affiliated`).then(res => {
            console.log(res);
            this.setState({ affiliated: res.data });
        });

        axios.get(`/api/former`).then(res => {
            console.log(res);
            this.setState({ former: res.data });
        });

        //this.setState({isLoading: false})
    }

    constructor( props ){
        super();
};

    toggleSecondImage = () => {
        const {toggleSecondImage} = this.state.toggleSecondImage;
        this.setState({toggleSecondImage: !toggleSecondImage})
    }



    render(){
        let memberCards = this.state.members.map(person =>{
            return( 
                <Col sm="4">
                    <Members person={person} image={person.image}/>
                    <br />
                </Col>
            )
        })

        let facultyPHDCard = this.state.facultyPHD.map(person =>{
            return( 
                <Col sm="4" md={{ size: 6, offset: 3 }}>
                    <FacultyPHD person={person} image={person.image}/>
                    <br />
                </Col>
            )
        })

        let facultyCSUCards = this.state.facultyCSU.map(person =>{
            return( 
                <Col sm="4">
                    <FacultyCSU person={person} image={person.image}/>
                    <br />
                </Col>
            )
        })

        let facultyFIUCards = this.state.facultyFIU.map(person =>{
            return( 
                <Col sm="4">
                    <FacultyFIU person={person} image={person.image}/>
                    <br />
                </Col>
            )
        })

        let affiliatedCards = this.state.affiliated.map(person =>{
            return( 
                <Col sm="4">
                    <Affiliated person={person} image={person.image}/>
                    <br />
                </Col>
            )
        })

        let formerCards = this.state.former.map(person =>{
            return( 
                <Col sm="4">
                    <Former person={person} image={person.image}/>
                    <br />
                </Col>
            )
        })


       /* var MongoClient = require("mongoose").MongoClient;
        var url = 'mongodb://localhost/nuidb';
        
        MongoClient.connect(url, function(err, db){
            console.log("Connected");
            db.close();
        }); */
        
        return(

            <Container fluid>
                <Row><br /><br /></Row>
                <Row>  
                    <Col sm="8" md={{offset: 2}}>
                        <Carousel className="about-carousel"/>
                    </Col>
                </Row>
                <Row>
                <div className="lab-description">
                        <br />
                        <img className="map-image" src={map} alt="Map"/>
                        <article className="lab-text">
                            <h4>Who are We?</h4>
                            <p>We are a multi-disciplinary group, with our primary site at Colorado State University and with a still active site at Florida International University. We have included a diverse background of knowledge and origins. While CS-centric, former students have included majors, such as Statistics, Mathematics, Biology, Psychology, Engineering, and Architecture, among others. We have had members from multiple places, including USA, Cuba, Chile, Colombia, Jamaica, Dominican Republic, China, Brazil, and Venezuela, among others.</p>
                        </article>
                    </div>
                    <hr className="line" />
                </Row>
                
              
                <h1>Faculty</h1>
                    <br />
                    <Container>
                        <Row >
                            {facultyPHDCard}   
                        </Row>
                    </Container>
                    <hr className="line" />     
                    <br />

                <h1>Affiliated Faculty</h1>
                    <br />
                    <Container>
                        <Row >
                            {facultyCSUCards}  
                            {facultyFIUCards} 
                        </Row>
                    </Container>
                    <hr className="line" />     
                    <br />

                <h1>Current Assistants and Volunteers</h1>
                    <br />
                    <Container>
                        <Row >
                            {memberCards}   
                        </Row>
                        <Row >
                            <h2>Affiliated Students</h2> 
                        </Row> 
                        <Row>
                            {affiliatedCards}  
                        </Row>
                    </Container>
                    <hr className="line" />     
                    <br />

                <h1>Former Assistants and Volunteers</h1>
                    <br />
                    <Container>
                        <Row >
                            {formerCards}   
                        </Row>
                    </Container>     
                    <br />

            </Container>
        )
    }
}


export default About;