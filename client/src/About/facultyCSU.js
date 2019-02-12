import React, { Component } from 'react';
import './about.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import andy from '../assets/images/people/andy-pujol.jpg';
  

class FacultyCSU extends Component {

    constructor(props){
        super(props);
    }


    render() {
        let personColor = (this.props.person.university === "Colorado State University (Fort Collins, CO)") ? "member-card-separator-csu" : "member-card-separator-fiu";
        //let image = require(`${this.props.image}`);
        return (
            <div>
                <Card>
                    <CardImg top src={this.props.image} alt="Card image cap" />
                    <CardBody>
                        <CardTitle className="title"><b>{this.props.person.name}</b>, {this.props.person.education} - {this.props.person.major}</CardTitle>
                        <CardSubtitle className="university-csu">{this.props.person.university}</CardSubtitle>
                        <hr className={personColor} />
                        <CardSubtitle className="email">{this.props.person.email}</CardSubtitle>
                        <CardText className="description">{this.props.person.description}</CardText>
                        {this.props.person.website === "website" || this.props.person.website === "" ? null : <a className="website-link" href={this.props.person.website}><Button outline color="success">Website</Button></a>}
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default FacultyCSU;