import React from 'react';

import './portfolio.css'

function Portfolio() {
    return (
        <div className="Portfolio">
            <header className="PortfolioHeader">
                <h1>Portfolio</h1>
                <div className="products">
                    <ul>
                        <li>Curso 1</li>
                        <li>Curso 2</li>
                        <li>Curso 3</li>
                        <li>Curso 4</li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Portfolio;