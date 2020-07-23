import React from 'react';
import { Container, Button, Link } from 'react-floating-action-button';

import "./floatButton.css";

function FloatButton() {
    return (
        <Container>
            <Link
                href="#home"
                tooltip="Voltar para o Topo!"
                icon="fa fa-rocket fa-1x"
                styles={{ backgroundColor: '#282c34', color: '#ffffff' }}
            />
             <Link
                tooltip="Twitter!"
                icon="fa fa-twitter"
                className="fab-item btn btn-link btn-lg text-white"
                styles={{ backgroundColor: '#ffffff', color: '#282c34' }}
                onClick={() => { }} />
             <Link
                tooltip="Instagram!"
                icon="fa fa-instagram"
                className="fab-item btn btn-link btn-lg text-white"
                styles={{ backgroundColor: '#ffffff', color: '#282c34' }}
                onClick={() => { }} />
             <Link
                tooltip="Facebook!"
                icon="fa fa-facebook-f"
                className="fab-item btn btn-link btn-lg text-white"
                styles={{ backgroundColor: '#ffffff', color: '#282c34' }}
                onClick={() => { }} />
            <Link
                tooltip="Entrar no Telegram!"
                icon="fa fa-telegram fa-2x"
                className="fab-item btn btn-link btn-lg text-white"
                styles={{ backgroundColor: '#ffffff', color: '#282c34' }}
                onClick={() => { }} />
            <Button
                tooltip="Opções!"
                icon="fa fa-cogs fa-3x"
                styles={{ backgroundColor: '#282c34', color: '#ffffff' }}
                rotate={true}
                onClick={() => { }} />
        </Container>
    )
}

export default FloatButton;