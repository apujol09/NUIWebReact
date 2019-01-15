import React from 'react';
import './about.css';
import header1 from '../assets/images/people/header_photo.jpg';
import header2 from '../assets/images/people/header_photo2.jpg';
import map from '../assets/images/general/map.svg'

class About extends React.Component{
    constructor( props ){
        super();
       
        this.state = { toggleSecondImage: false };
        this.toggleSecondImage = this.toggleSecondImage.bind(this);
};

    toggleSecondImage = () => {
        const {toggleSecondImage} = this.state;
        this.setState({toggleSecondImage: !toggleSecondImage})
    }

    render(){

       /* var MongoClient = require("mongoose").MongoClient;
        var url = 'mongodb://localhost/nuidb';
        
        MongoClient.connect(url, function(err, db){
            console.log("Connected");
            db.close();
        }); */
        
        return(
            <div>
                <div className="header">
                    <button className="toggleButton1" onClick={this.toggleSecondImage}>&larr;</button>
                        { this.state.toggleSecondImage ? (
                            <img className="bigHeader" src={header1} />
                            ):
                            (
                            <img className="bigHeader" src={header2} />
                            )
                        }
                    <button className="toggleButton2" onClick={this.toggleSecondImage}>&rarr;</button>
                </div>
                
                <br />
                <img className="map-image" src={map} />
                <article className="lab-text">
                    <h4>Who are We?</h4>
                    <p>We are a multi-disciplinary group, with our primary site at Colorado State University and with a still active site at Florida International University. We have included a diverse background of knowledge and origins. While CS-centric, former students have included majors, such as Statistics, Mathematics, Biology, Psychology, Engineering, and Architecture, among others. We have had members from multiple places, including USA, Cuba, Chile, Colombia, Jamaica, Dominican Republic, China, Brazil, and Venezuela, among others.</p>
                </article>
                <hr />
                <br />
                <br />
            </div>
        )
    }
}


export default About;