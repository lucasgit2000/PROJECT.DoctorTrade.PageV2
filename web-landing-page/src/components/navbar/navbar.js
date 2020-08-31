import React, { useState } from 'react';

import './navbar.css'

function NavBar() {

    const [showMenuHamburguerList, setShowMenuHamburguerList] = useState(false)

    let hamburgerMenuList = (
        <ul className="hamburger-menu-list">
            <li><a href="#instructions">Começar Agora</a></li>
            <li><a href="#demonstration">Como Funciona</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#portfolio">Produtos Doctor</a></li>
            <li><a href="#about">Sobre</a></li>
        </ul>
    )

    function ToggleMenuHamburguerList() {
        setShowMenuHamburguerList(!showMenuHamburguerList)
    }

    return (
        <div id="navBar" className="containerNavBar">
            <div className="contentNavBar">
                <a href="#home">
                    <img id='navLogo'
                        className='center'
                        src={require('../../assets/img/logo.png')}
                        alt='logo' />
                </a>
                <button className="hamburger-menu" onClick={() => { ToggleMenuHamburguerList() }}>
                    <i className="fa fa-bars"></i>
                </button>
                <ul className="containerNavBar-list">
                    <li><a href="#instructions">Começar Agora</a></li>
                    <li><a href="#demonstration">Como Funciona</a></li>
                    <li><a href="#reviews">Reviews</a></li>
                    <li><a href="#portfolio">Produtos Doctor</a></li>
                    <li><a href="#about">Sobre</a></li>
                </ul>
                {showMenuHamburguerList ? hamburgerMenuList : null}
            </div>
        </div>
    );
}

export default NavBar;