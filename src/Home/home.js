import React from 'react';
import './home.css'; 
import proom from '../assets/images/general/proom.png';

class Home extends React.Component{
    render(){
        return(
            <div>
            <div className = "video">
                <video id="fullscreen-video" autoplay poster="../assets/videos/background.jpg" loop>
                    <source src="../assets/videos/background.mp4" type="video/mp4"/>
                    <source src="../assets/videos/background.m4v"/>
                    <source src="../assets/videos/background.webm" type="video/webm"/>
                    <source src="../assets/videos/background.ogv" type="video/ogv"/>
                </video>
                <div className = "logo"></div>
            </div>
            <div>
            <b>NUI</b> Lab <br />
            <a href="http://www.cs.colostate.edu/cstop/">CSU's</a> Natural User Interaction Lab
            </div>
            <img className= "proom" src = {proom}/>
    
            <article className = "text">
                <h4>What is the NUI Lab?</h4>
                <p>NUI Lab, (Formerly known as OpenHID), founded in January 2015, is dedicated to the research and development of 3D User Interfaces including selection, manipulation and navigation, Gesture User Interfaces including recognition and elicitation, Multi-Modal Interaction, and Virtual &amp; Augmented Reality, among other research interest we have. In general, we concentrate in the research of Gesture User Interfaces and how those along with other modalities may improve the user's interaction. We strive to advance Human-Centered Computing state of the art.</p>
                <p>NUI Lab was originally founded at Florida International University (with the initial help of FIU's High Performance Database Research Center) and now resides in its new home at Colorado State University in the Computer Science Department.  The lab founder and director is Francisco R. Ortega, Ph.D. </p>
            </article>
            </div>
        )
    }
}

export default Home;