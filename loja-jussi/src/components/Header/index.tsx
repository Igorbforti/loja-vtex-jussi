import React from 'react';
import './style.css';
import logoIcon from '../../assets/images/jussi-logo.svg';
import searchIcon from '../../assets/images/search-icon.svg'
import minicartIcon from '../../assets/images/shopping-cart-icon.svg';

const Header = () => {
    return (
        <>
            <header className='header'>
                <div className='main-header'>
                    <div className="header-left">
                        <img src={logoIcon} alt="Logo" />
                        <a href="" className='header-menu'>Nossas soluções</a>
                        <a href="" className='header-menu'>Conheça a Jüssi</a>
                    </div>
                    <div className="header-right">
                        <div className='header-search-container'>
                            <input type="text" placeholder='Buscar' className="header-search-bar" />
                            <a href="" className='header-search-icon'>
                                <img src={searchIcon} alt="Ícone de busca" />
                            </a>
                        </div>
                        <a href="" className="header-menu">Login</a>
                        <a href="" className='header-minicart'>
                            <img src={minicartIcon} alt="Ícone de minicart" />
                        </a>
                    </div>
                </div>
            </header>
        </>
    )
} 

export default Header