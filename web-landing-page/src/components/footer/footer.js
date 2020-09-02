import React from 'react';

//CSS
import './footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="credits-fotter">
                    <p>❤️ Developed by <a href="https://github.com/lucasgit2000/" target="_blank">Lucas Lucena</a></p>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                                <a href="#twitter-footer">
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#facebook-footer">
                                    <i className="fa fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.instagram.com/doctortrader_/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;


