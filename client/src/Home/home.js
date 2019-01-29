import React from 'react';
import './home.css'; 
import proom from '../assets/images/general/proom.png';
import background from "../assets/videos/background.jpg";
import logo from '../assets/images/general/openhid-logo.png';

class Home extends React.Component{
    render(){
        return(
            <div>
                <div className="parent">
                    <img className="logo" src={logo} />
                    <img className="background" src={background} />
                </div>
                <div className="hero">
                    <b>NUI Lab <br />
                    <a className="labShort" href="http://www.cs.colostate.edu/cstop/">CSU's</a> Natural User Interaction Lab</b>
                </div>
                <img className= "proom" src = {proom}/>
        
                <article className = "text">
                    <h4>What is the NUI Lab?</h4>
                    <p>NUI Lab, (Formerly known as OpenHID), founded in January 2015, is dedicated to the research and development of 3D User Interfaces including selection, manipulation and navigation, Gesture User Interfaces including recognition and elicitation, Multi-Modal Interaction, and Virtual &amp; Augmented Reality, among other research interest we have. In general, we concentrate in the research of Gesture User Interfaces and how those along with other modalities may improve the user's interaction. We strive to advance Human-Centered Computing state of the art.</p>
                    <p>NUI Lab was originally founded at Florida International University (with the initial help of FIU's High Performance Database Research Center) and now resides in its new home at Colorado State University in the Computer Science Department.  The lab founder and director is Francisco R. Ortega, Ph.D. </p>
                </article>
                <br />
                <br />
                <br />
            </div>
        )
    }
}

export default Home;