import React, { Component } from 'react';
import './about.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom'
  

class FacultyPHD extends Component {

    constructor(props){
        super(props);
    }


    render() {
        let personColor = (this.props.person.university === "Colorado State University (Fort Collins, CO)") ? "member-card-separator-csu" : "member-card-separator-fiu";
        let buttonColor = (this.props.person.university === "Colorado State University (Fort Collins, CO)") ? "success" : "primary";
        let universityColor = (this.props.person.university === "Colorado State University (Fort Collins, CO)") ? "university-csu" : "university-fiu";
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
                        <CardText>{this.props.person.description_short}</CardText>
                        <Button outline color={buttonColor} onclick={this.redirect}>More Info</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default FacultyPHD;