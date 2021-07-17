import React from 'react';
import '../styles/theme.scss';
import './portfolio.scss';

import Home from '../pages/home/home';
import About from '../pages/about/about';

const Portfolio = (props) => {

    return (
        <div className="portfolio">
            <div id="potrait">
                <Home changeTheme={props.changeTheme} />
                <About />
                <div style={{ height: '600px' }}>sdfsdf</div>
            </div>
            <div id="landscape">
                <div className="message">Please rotate your device.</div>
            </div>
        </div>
    )

}

export default Portfolio;