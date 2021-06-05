import React from 'react';
import '../styles/theme.scss';
import './portfolio.scss';

import Home from '../pages/home/home';

const Portfolio = (props) => {

    return (
        <div className="portfolio">
            <Home changeTheme={props.changeTheme}/>

        </div>
    )

}

export default Portfolio;