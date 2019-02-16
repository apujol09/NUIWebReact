import React from 'react';
import './about.css';
import axios from 'axios';
import Members from './member';
import Affiliated from './affiliated';
import Former from './former';
import FacultyPHD from './facultyPHD';
import FacultyCSU from './facultyCSU';
import FacultyFIU from './facultyFIU';
import Carousel from './carousel';
import Domain from '../Utils/misc';
import MemberForm from '../Forms/member';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/fontawesome-free-solid';
import { Container, Row, Col, Button, CardImg, UncontrolledCollapse } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class About extends React.Component{
    constructor( props ){
        super();
        this.state={
            facultyPHD: [],
            facultyCSU: [],
            facultyFIU: [],
            members: [],
            affiliated: [],
            former: [],
            isLoading: true,
            isloggedIn: false,
            isFormOpen: false
        }
        this.toggle = this.toggle.bind(this);
    };
    

    

    componentDidMount(){
        axios.get(`/api/members`).then(res => {
            this.setState({ members: res.data });
        });

        axios.get(`/api/facultyPHD`).then(res => {
            this.setState({ facultyPHD: res.data });
        });

        axios.get(`/api/facultyCSU`).then(res => {
            this.setState({ facultyCSU: res.data });
        });

        axios.get(`/api/facultyFIU`).then(res => {
            this.setState({ facultyFIU: res.data });
        });

        axios.get(`/api/affiliated`).then(res => {
            this.setState({ affiliated: res.data });
        });

        axios.get(`/api/former`).then(res => {
            this.setState({ former: res.data });
        });

        axios.get(`/api/auth`).then(res => {
            if(res.data.isAuth === true){
                this.setState({ isloggedIn: true });
            }
            else{
                this.setState({ isloggedIn: false });
            }
        });

        //this.setState({isLoading: false})
    }

    toggle(){
        this.setState({ isFormOpen: !this.state.isFormOpen })
    }



    render(){
        let number = 0;
        let memberCards = this.state.members.map(person =>{
            number++;
            return( 
                <Col key={person._id} sm="4">
                    {this.state.isloggedIn ? <Button id={"toggler_" + number} onClick={this.toggle}><FontAwesomeIcon icon={faEdit} size="2x"/></Button> : null}
                    <Members person={person} image={person.image}/>
                    {this.state.isloggedIn ? 
                        <UncontrolledCollapse toggler={"toggler_" + number}>
                            <MemberForm member={person} />
                        </UncontrolledCollapse>
                    : null
                    }
                    <br />
                </Col>
            )
        })

        let facultyPHDCard = this.state.facultyPHD.map(person =>{
            number++;
            return( 
                <Col key={person._id}>
                    <FacultyPHD person={person} image={person.image}/>
                    <br />
                </Col>
            )
        })

        let facultyCSUCards = this.state.facultyCSU.map(person =>{
            number++;
            return( 
                <Col key={person._id} sm="4">
                    <FacultyCSU person={person} image={person.image}/>
                    <br />
                </Col>
            )
        })

        let facultyFIUCards = this.state.facultyFIU.map(person =>{
            number++;
            return( 
                <Col key={person._id} sm="4">
                    <FacultyFIU person={person} image={person.image}/>
                    <br />
                </Col>
            )
        })

        let affiliatedCards = this.state.affiliated.map(person =>{
            number++;
            return( 
                <Col key={person._id} sm="4">
                    <Affiliated person={person} image={person.image}/>
                    <br />
                </Col>
            )
        })

        let formerCards = this.state.former.map(person =>{
            number++;
            return( 
                <Col key={person._id} sm="4">
                    <Former person={person} image={person.image}/>
                    <br />
                </Col>
            )
        })
        
        return(

            <Container >
                <Row><br /><br /></Row>
                <Row>  
                    <Col sm="12">
                        <Carousel />
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 4}}>
                        <CardImg style={{width: "90%"}} src={Domain + "assets/images/general/map.svg"} alt="Map"/>
                    </Col>
                    <Col>
                        <br />
                        <article className="lab-text">
                            <h4>Who are We?</h4>
                            <p>We are a multi-disciplinary group, with our primary site at Colorado State University and with a still active site at Florida International University. We have included a diverse background of knowledge and origins. While CS-centric, former students have included majors, such as Statistics, Mathematics, Biology, Psychology, Engineering, and Architecture, among others. We have had members from multiple places, including USA, Cuba, Chile, Colombia, Jamaica, Dominican Republic, China, Brazil, and Venezuela, among others.</p>
                        </article>
                    </Col>
                <hr className="line" />
                </Row>
                
                <Row>
                    <Col md={{size: 6, offset: 3}}>
                        <h1>Faculty</h1>
                            <br />
                            <Container>
                                <Row>
                                    {facultyPHDCard}   
                                </Row>
                            </Container>     
                            <br />
                    </Col>
                    {this.state.isloggedIn ? (<Col sm={{offset: 1}}><NavLink to="/add-member"><Button outline color="info">Add New Member</Button></NavLink></Col>) : null}
                </Row>
                <hr className="line" />

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