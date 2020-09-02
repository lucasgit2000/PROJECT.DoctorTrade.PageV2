import React from 'react';

import './portfolio.css'

function Portfolio() {
    return (
        <div className="Portfolio" id="portfolio">
            <header className="PortfolioHeader">
                <h1>Portfolio</h1>
                <div className="products">
                    <ul>
                        <li>Curso 1</li>
                        <li>Curso 2</li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Portfolio;