import React, { useState, useEffect } from 'react';
import { useDebounce } from '../../useDebounce';
import './style.css';

import logoIcon from '../../assets/images/jussi-logo.svg';
import minicartIcon from '../../assets/images/shopping-cart-icon.svg';
import menuMobile from '../../assets/images/menu-mobile.svg';

const Header = ({setResults}) => {

    const [input, setInput] = useState("");
    const debouncedInput = useDebounce(input, 1000)

    const fetchData = (value) => {
        const url = `https://fakestoreapi.com/products`;
        try {
            fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                const result = data.filter((product) => {
                    return value && product && product.title.toLowerCase().includes(value)
                })
                setResults(result)
            })
        } catch (error) {
            console.error("Erro na requisição", error);
        }
    }

    useEffect(() => {
        fetchData(debouncedInput);
    }, [debouncedInput]);

    const handleChange = (value) => {
        setInput(value)
    }

    return window.innerWidth > 768 ? (
        <>
            <header className='header'>
                <div className='main-header'>
                    <div className="header-left">
                        <img src={logoIcon} alt="Logo" />
                        <a href="/" className='header-menu'>Nossas soluções</a>
                        <a href="/" className='header-menu'>Conheça a Jüssi</a>
                    </div>
                    <div className="header-right">
                        <form className='header-search-container'>
                            <input placeholder='Buscar' value={input} onChange={(e) => handleChange(e.target.value)}  className="header-search-bar" />
                            <input className='header-search-submit' />
                        </form>
                        <a href="/" className="header-menu">Login</a>
                        <a href="/" className='header-minicart'>
                            <img src={minicartIcon} alt="Ícone de minicart" />
                        </a>
                    </div>
                </div>
            </header>
        </>
    ) : (
        <>
            <header className='header'>
                <div className='main-header'>
                    <div className="header-left">
                        <img src={logoIcon} alt="Logo" />
                        <img src={menuMobile} alt="" />
                    </div>
                    <form className='header-search-container'>
                        <input placeholder='Buscar' value={input} onChange={(e) => handleChange(e.target.value)}  className="header-search-bar" />
                        <input className='header-search-submit' />
                    </form>
                </div>
            </header>
        </>
    )
} 

export default Header