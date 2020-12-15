import React from "react"
import '../styles/Header.css';
import logo from '../assets/logo.svg';
// import search from '../assets/search.svg'
import twitter from '../assets/twitter.svg';
import facebook from '../assets/facebook.svg';

const Header = () => {
    return(
        <div className="header" >
            <img src={logo} alt="VR" />
            {/* <img src={search} alt="search" /> */}
            <ul className="header__links">
                <li className="header__active">Gear VR</li>
                <li>Design</li>
                <li>Display</li>
                <li>Experience</li>
                <li>Spec</li>
                <li>Gallery</li>
            </ul>
            <div className="header__icons">
                <img src={ twitter } alt="twitter" />
                <img src={ facebook } alt="facebook" />
            </div>
        </div>
        )
}

export default Header
