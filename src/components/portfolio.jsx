import React from 'react';
import '../styles/theme.scss';
import './portfolio.scss';

import Home from '../pages/home/home';
import About from '../pages/about/about';

const Portfolio = (props) => {

    const toggleOverlay = () => {
        let overlay = document.getElementById('hiddenOverlay');
        let element = document.getElementById('menu');
        element.style.display = 'none';
        overlay.style.display = 'none';
    }

    return (
        <div className="portfolio">
            <div id="potrait">
                <Home changeTheme={props.changeTheme} />
                <About />
                <div style={{ height: '600px' }}>sdfsdf</div>
                <div id="hiddenOverlay" onClick={toggleOverlay}></div>
            </div>
            <div id="landscape">
                <div className="message">Please rotate your device.</div>
            </div>
        </div>
    )

}

export default Portfolio;