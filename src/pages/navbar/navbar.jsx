import React from 'react';

import './navbar.scss';

import { faCog, faMoon, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = (props) => {
    return (
        <div className="navbar-container">
            <div className="menu">
                <div className="menu-item">
                    <FontAwesomeIcon icon={faHome} />
                    Home
                </div>
                <div className="menu-item">
                    <FontAwesomeIcon icon={faHome} />
                    About
                </div>
                <div className="menu-item">
                    <FontAwesomeIcon icon={faHome} />
                    Skills
                </div>
                <div className="menu-item">
                    <FontAwesomeIcon icon={faHome} />
                    Qualifications
                </div>
                <div className="menu-item">
                    <FontAwesomeIcon icon={faHome} />
                    Portfolio
                </div>
                <div className="menu-item">
                    <FontAwesomeIcon icon={faHome} />
                    Contact
                </div>
            </div>
            <div className="navbar">
                <div className="float_left">Shankar</div>
                <div className="float_right">
                    <FontAwesomeIcon icon={faCog} />
                </div>
                <div className="float_right" onClick={props.changeTheme}>
                    <FontAwesomeIcon icon={faMoon} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;