import React from 'react';

import './instructions.css'

function Instructions() {
    return (
        <div className="Instructions">
            <header className="InstructionsHeader">
                <h1>Como funciona</h1>
                <section className="how-to-section">
                    <div class="max-width">
                        <div className="how-to-steps">
                            <div className="step1">
                                <p>1</p>
                                <span></span>
                                <h2>Entre no Telegram</h2>
                            </div>
                            <div className="step2">
                                <p>2</p>
                                <span></span>
                                <h2>Converse com um Admin</h2>
                            </div>
                            <div className="step3">
                                <p>3</p>
                                <span></span>
                                <h2>Tenha sinais altamente precisos</h2>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </div>
    );
}

export default Instructions;