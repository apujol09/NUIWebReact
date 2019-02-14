import React from 'react';
import './events.css';
import { Container, Row, Col, Jumbotron, CardImg, Button } from 'reactstrap';
import axios from 'axios';

class Events extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            events: []
        }
      }

    componentDidMount(){
        axios.get(`/api/events`).then(res => {
            this.setState({ events: res.data });
        });
    }

    render(){
        let render = []
        if(this.state.events){
            this.state.events.forEach(event => {
                render.push(
                    <Jumbotron key={event._id} className="event-jumbotron">
                        <Container>
                            <Row>
                                <Col sm="5">
                                    <CardImg src={event.image} />
                                </Col>
                                <Col>
                                    <p className="event-name">{event.name}</p>
                                    <p className="event-date"><b>Date:</b> {event.date}</p>
                                    <p className="event-time"><b>Time:</b> {event.time}</p>
                                    <p className="event-location"><b>Location:</b> {event.location}</p>
                                    <p className="event-presentation"><b>Presentation:</b> {event.presentation}</p>
                                </Col>
                            </Row>
                            <Row>
                                {event.powerpoint ? (<Col><a href={event.powerpoint}><Button color="warning">PowerPoint</Button></a></Col>) : null}
                                {event.video ? (<Col><a href={event.video}><Button color="info">Video</Button></a></Col>) : null}
                                {event.class ? (<Col><a href={event.class}><Button color="success">Class</Button></a></Col>) : null}
                            </Row>
                        </Container>
                    </Jumbotron>
                )
            })
        }

        return(
            <div>
            <Container>
                    <Row><br /><br /></Row>
                    <Row>
                        <Col md={{size: 6, offset: 3}}>
                            <h1>Events/Talks</h1>
                        </Col>
                    </Row>
                    <Row>
                        <hr className="event-line" />
                    </Row>
                    <Row>
                        {render}
                        <br />
                        <br />
                    </Row>
                </Container>
            </div>
        )
    }
}


export default Events;