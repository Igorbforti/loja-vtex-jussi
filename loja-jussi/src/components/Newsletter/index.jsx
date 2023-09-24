import React from 'react';
import './style.css';


const Newsletter = () => {
    return (
        <>
            <div className="newsletter-container">
                <h1 className='newsletter-title'>receba novidades da nossa área de produtos digitais.</h1>
                <form className='newsletter-form'>
                    <input type="text" placeholder='Digite seu e-mail' className="newsletter-email" />
                    <input type="submit" value='CADASTRAR' className='newsletter-send' />
                </form>
            </div>
        </>
    )
} 

export default Newsletter