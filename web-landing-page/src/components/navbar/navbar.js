import React from 'react';

import './navbar.css'

function NavBar() {
    return (
        <div className="container">
            <div className="content">
                <a href="#home">
                    <img id='navLogo'
                        className='center'
                        src={require('../../assets/logo.png')}
                        alt='logo' />
                </a>
                <ul>
                    <li><a href="#instructions">Começar Agora</a></li>
                    <li><a href="#demonstration">Como Funciona</a></li>
                    <li><a href="#reviews">Reviews</a></li>
                    <li><a href="#portfolio">Produtos Doctor</a></li>
                    <li><a href="#about">Sobre</a></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;