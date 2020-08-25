import React from 'react';

//CSS
import './about.css'

function About() {
    return (
        <div className="about-page">
            <header className="about-page about-page-header">
                <h1>About</h1>
            </header>
            <body className="about-page about-page-body">
                <div className="about-page-body container-about">
                    <div className="list-about">
                        <div className="list-about list-item list-item-one">
                            <img src={require('../../assets/img/2498326.png')}></img>
                            <span>Aliquip esse dolor laboris veniam sint proident.</span>
                            <p>Anim pariatur aliquip laboris laboris sunt consequat duis fugiat. Incididunt irure nostrud culpa occaecat consectetur ullamco nostrud cupidatat nostrud quis cillum nulla mollit proident. Dolore ut sunt est proident et minim qui sunt duis nulla veniam ipsum. Exercitation dolor sint ut sint aliquip aliqua amet ut proident.</p>
                        </div>
                        <div className="list-about list-item list-item-two">
                            <img src={require('../../assets/img/business-and-finance (1).png')}></img>
                            <span>Aliquip esse dolor laboris veniam sint proident.</span>
                            <p>Anim pariatur aliquip laboris laboris sunt consequat duis fugiat. Incididunt irure nostrud culpa occaecat consectetur ullamco nostrud cupidatat nostrud quis cillum nulla mollit proident. Dolore ut sunt est proident et minim qui sunt duis nulla veniam ipsum. Exercitation dolor sint ut sint aliquip aliqua amet ut proident.</p>
                        </div>
                        <div className="list-about list-item list-item-three">
                            <img src={require('../../assets/img/bussiness.png')}></img>
                            <span>Aliquip esse dolor laboris veniam sint proident.</span>
                            <p>Anim pariatur aliquip laboris laboris sunt consequat duis fugiat. Incididunt irure nostrud culpa occaecat consectetur ullamco nostrud cupidatat nostrud quis cillum nulla mollit proident. Dolore ut sunt est proident et minim qui sunt duis nulla veniam ipsum. Exercitation dolor sint ut sint aliquip aliqua amet ut proident.</p>
                        </div>
                        <div className="list-about list-item list-item-four">
                            <img src={require('../../assets/img/investor.png')}></img>
                            <span>Aliquip esse dolor laboris veniam sint proident.</span>
                            <p>Anim pariatur aliquip laboris laboris sunt consequat duis fugiat. Incididunt irure nostrud culpa occaecat consectetur ullamco nostrud cupidatat nostrud quis cillum nulla mollit proident. Dolore ut sunt est proident et minim qui sunt duis nulla veniam ipsum. Exercitation dolor sint ut sint aliquip aliqua amet ut proident.</p>
                        </div>
                        <div className="list-about list-item list-item-five">
                            <img src={require('../../assets/img/money-bag.png')}></img>
                            <span>Aliquip esse dolor laboris veniam sint proident.</span>
                            <p>Anim pariatur aliquip laboris laboris sunt consequat duis fugiat. Incididunt irure nostrud culpa occaecat consectetur ullamco nostrud cupidatat nostrud quis cillum nulla mollit proident. Dolore ut sunt est proident et minim qui sunt duis nulla veniam ipsum. Exercitation dolor sint ut sint aliquip aliqua amet ut proident.</p>
                        </div>
                        <div className="list-about list-item list-item-six">
                            <img src={require('../../assets/img/problem-solving.png')}></img>
                            <span>Aliquip esse dolor laboris veniam sint proident.</span>
                            <p>Anim pariatur aliquip laboris laboris sunt consequat duis fugiat. Incididunt irure nostrud culpa occaecat consectetur ullamco nostrud cupidatat nostrud quis cillum nulla mollit proident. Dolore ut sunt est proident et minim qui sunt duis nulla veniam ipsum. Exercitation dolor sint ut sint aliquip aliqua amet ut proident.</p>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    );
}

export default About;
