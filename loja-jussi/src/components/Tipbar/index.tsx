import React from 'react';
import './style.css';

import arrowIcon from '../../assets/images/arrow-icon.svg';
import brastempIcon from '../../assets/images/logo-brastemp.svg';
import compraCertaIcon from '../../assets/images/logo-compra-certa.svg';
import consulIcon from '../../assets/images/logo-consul.svg';
import theBarIcon from '../../assets/images/logo-thebar.svg';

const Tipbar = () => {
    return (
        <>
            <div className='tipbar-container'>
                <p className="tipbar-text">Nossas principais lojas VTEX</p>
                <img src={arrowIcon} alt="Ícone de seta" />
                <img src={brastempIcon} alt="Ícone Brastemp" />
                <img src={compraCertaIcon} alt="Ícone Compra Certa" />
                <img src={consulIcon} alt="Ícone Consul" />
                <img src={theBarIcon} alt="Ícone The Bar" />
            </div>
        </>
    )
} 

export default Tipbar