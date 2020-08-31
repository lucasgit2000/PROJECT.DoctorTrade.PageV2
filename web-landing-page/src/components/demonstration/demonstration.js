import React from 'react';

import './demonstration.css'

function Demonstrations() {
    return (
        <div className="demonstration-page">
            <div className="demonstration-header">
                <h1>Demonstração</h1>
            </div>
            <div className="demonstration-body">
                <div className="demonstration-body-content">
                    <div className="celular-container">
                        <img src={require('../../assets/img/unnamed.png')} alt="celular demonstração"></img>
                    </div>
                    <div className="demonstration-body-content-text">
                        <p>Occaecat eu exercitation sit pariatur sit ullamco ea eu do laboris ut. Ullamco mollit aute qui laborum fugiat adipisicing occaecat pariatur magna. Laborum magna irure et Lorem sit est mollit officia cillum deserunt veniam anim.
                        Occaecat eu exercitation sit pariatur sit ullamco ea eu do laboris ut. Ullamco mollit aute qui laborum fugiat adipisicing occaecat pariatur magna. Laborum magna irure et Lorem sit est mollit officia cillum deserunt veniam anim.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Demonstrations;