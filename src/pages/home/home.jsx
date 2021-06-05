import React from 'react';
import '../../styles/theme.scss';
import './home.scss';

import Navbar from '../navbar/navbar';

import { faFacebookF, faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = (props) => {


    return (
        <div className="home-container">
            <div className="media-image-container">
                <div className="media-container">
                    <a href="https://www.linkedin.com/in/shankarkruthiventi/" rel="noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a href="https://www.facebook.com/shankar.kruthiventi/" rel="noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="https://github.com/shankar-kruthiventi" rel="noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faGithubAlt} />
                    </a>
                </div>
                <div className="image-container"></div>
            </div>
            <div className="home">
                <div className="name">Hi I'm Shankar</div>
                <div className="designation">Front-end Engineer</div>
                <div className="experience">
                    I have 5+ years of experience in Modern Front-end Development.
                </div>
                <div className="experience">
                    Have built aesthetic and fucntional applications using Angular, React and Node
                </div>
                
                <button className="contact-button">
                    Contact Me &nbsp;
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
            <Navbar changeTheme={props.changeTheme}/>
        </div>
    )

}

export default Home;