import React from 'react';

import './navbar.scss';

import { faCog, faMoon, faHome, faUserAlt, faFile, faBriefcase, faAddressCard, faImages } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = (props) => {
    
    const toggleMenu = () => {
        let element = document.getElementById('menu');
        let overlay = document.getElementById('hiddenOverlay');
        if(element.style.display === 'grid') {
            element.style.display = 'none';
        } else {
            element.style.display = 'grid';
            overlay.style.display = 'block';
        }
    }

    const toggleOverlay = () => {
        let overlay = document.getElementById('hiddenOverlay');
        let element = document.getElementById('menu');
        element.style.display = 'none';
        overlay.style.display = 'none';
    }

    const scrollIntoView = (id) => {
        document.getElementById(id).scrollIntoView({block: "start"});
    }
    
    return [
        <div id="hiddenOverlay" onClick={toggleOverlay}></div>,
        <div className="navbar-container">
            <div id="menu" className="menu" onClick={toggleMenu}>
                <div className="menu-item" onClick={() => scrollIntoView('home')}>
                    <div>
                        <FontAwesomeIcon icon={faHome} />
                        Home
                    </div>
                </div>
                <div className="menu-item" onClick={() => scrollIntoView('about')}>
                    <div>
                        <FontAwesomeIcon icon={faUserAlt} />
                        About
                    </div>
                </div>
                <div className="menu-item">
                    <div>
                        <FontAwesomeIcon icon={faFile} />
                        Skills
                    </div>
                </div>
                <div className="menu-item">
                    <div>
                        <FontAwesomeIcon icon={faBriefcase} />
                        Qualifications
                    </div>
                </div>
                <div className="menu-item">
                    <div>
                        <FontAwesomeIcon icon={faImages} />
                        Portfolio
                    </div>
                </div>
                <div className="menu-item">
                    <div>
                        <FontAwesomeIcon icon={faAddressCard} />
                        Contact
                    </div>
                </div>
            </div>
            <div className="navbar">
                <div className="float_left">Shankar</div>
                <div className="float_right" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faCog} />
                </div>
                <div className="float_right" onClick={props.changeTheme}>
                    <FontAwesomeIcon icon={faMoon} />
                </div>
            </div>
        </div>
    ];
}

export default Navbar;