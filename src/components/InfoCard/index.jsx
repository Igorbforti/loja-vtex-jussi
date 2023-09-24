import React from 'react';
import './style.css';

import infoCardImage from '../../assets/images/info-card-image.svg';

const InfoCard = () => {
    return (
        <>
            <div className="infocard-container">
                <div className="infocard-text-area">
                    <h1 className='info-card-title'>Olá, somos a Jüssi</h1>
                    <p className='info-card-description'>A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.</p>
                    <a href="" className="info-card-button">Conheça a Jüssi</a>
                </div>
                <div className="infocard-image-area">
                    <img src={infoCardImage} alt="" />
                </div>
            </div>
        </>
    )
} 

export default InfoCard