import React from 'react';
import './footbar.css'; 
import CSUlogo from '../assets/images/general/CSU_Logo.png';


class Footbar extends React.Component{
    render(){
        return(
        <footer className="footer">
        <a href="http://www.cs.colostate.edu/cstop/"><img className="CSUlogo" src={CSUlogo} alt="Logo image" /></a>
        <hr className="hr" />
        <p className="paragraph">The NUI lab is a member of the <br /><a className="link" href="http://www.cs.colostate.edu/cstop/">CSU's College of Computing Sciences</a></p>
        </footer>
        )
    }
}

export default Footbar;