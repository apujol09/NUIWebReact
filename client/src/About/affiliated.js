import React, { Component } from 'react';
import './about.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import andy from '../assets/images/people/andy-pujol.jpg';
import { Redirect } from 'react-router-dom'
  

class Affiliated extends Component {


    constructor(props){
        super(props);
    }


    render() {
        let personColor = (this.props.person.university === "Colorado State University (Fort Collins, CO)") ? "member-card-separator-csu" : "member-card-separator-fiu";
        let universityColor = (this.props.person.university === "Colorado State University (Fort Collins, CO)") ? "university-csu" : "university-fiu";
        let buttonColor = (this.props.person.university === "Colorado State University (Fort Collins, CO)") ? "success" : "primary";
        //let image = require(`${this.props.image}`);
        return (
            <div>
                <Card>
                    <CardImg top src={this.props.image} alt="Card image cap" />
                    <CardBody>
                        <CardTitle className="title"><b>{this.props.person.name}</b>, {this.props.person.major} - {this.props.person.education}</CardTitle>
                        <CardSubtitle className={universityColor}>{this.props.person.university}</CardSubtitle>
                        <hr className={personColor} />
                        <CardSubtitle className="email">{this.props.person.email}</CardSubtitle>
                        <CardText>{this.props.person.description}</CardText>
                        <a className="website-link" href={this.props.person.website}><Button outline color={buttonColor} onclick={this.redirect}>Website</Button></a>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Affiliated;