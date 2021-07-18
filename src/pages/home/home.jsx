import React from 'react';
import '../../styles/theme.scss';
import './home.scss';
import ProfileImg from '../../assets/images/shankar-kruthiventi.jpg';
import Navbar from '../navbar/navbar';

import { faFacebookF, faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = (props) => {


    return (
        <div className="home-container" id="home">
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

                <div className="home home-desktop">
                    <div className="name">Hi, I'm Shankar</div>
                    <div className="designation">Front-end Engineer</div>
                    <div className="experience">
                        I have 5+ years of experience in Modern Front-end Development.
                    </div>
                    <div className="experience">
                        Have built Aesthetic and Functional Applications using Angular, React and Node
                    </div>

                    <div className="contact-button-container">
                        <button className="contact-button">
                            Contact Me &nbsp;
                    <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>




                <div className="image-container">
                    <svg className="home_blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <mask id="mask0" mask-type="alpha">
                            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                            130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                            97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                            0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                        </mask>
                        <g mask="url(#mask0)">
                            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                            165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                            129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                            -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                            <image className="home__blob-img" x="0" y="-8" xlinkHref={ProfileImg}/>
                        </g>
                    </svg>
                </div>
            </div>
            <div className="home home-mobile">
                <div className="name">Hi, I'm Shankar</div>
                <div className="designation">Front-end Engineer</div>
                <div className="experience">
                    I have 5+ years of experience in Modern Front-end Development.
                </div>
                <div className="experience">
                    Have built Aesthetic and Functional Applications using Angular, React and Node
                </div>

                <div className="contact-button-container">
                    <button className="contact-button">
                        Contact Me &nbsp;
                    <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
            <Navbar changeTheme={props.changeTheme} />
        </div>
    )

}

export default Home;