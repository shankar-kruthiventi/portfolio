import React from 'react';
import '../../styles/theme.scss';
import './about.scss';

import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
    return (
        <div className="about-main-container">
            <div className="about-title">My Introduction</div>
            <div className="about-container" id="about">
                <div className="about-image"></div>
                <div className="about-desc-container">
                    <div className="about-desc">Web developer with Extensive Knowledge and Years of Experience in Web Technologies</div>
                    <div className="about">
                        <div className="about-col">
                            <div>05+</div>
                            <div>Years of experience</div>
                        </div>
                        <div className="about-col">
                            <div>600000+</div>
                            <div>completed lines of code</div>
                        </div>
                        <div className="about-col">
                            <div>03+</div>
                            <div>Worked with Companies</div>
                        </div>

                    </div>
                    <div className="about-resume-button">
                        <button className="resume-button">Download CV &nbsp;
                    <FontAwesomeIcon icon={faDownload} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;