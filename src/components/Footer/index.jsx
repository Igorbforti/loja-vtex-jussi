import React from 'react';
import './style.css';

import footerLogo from '../../assets/images/wppcompany.svg';
import facebookLogo from '../../assets/images/facebook.svg';
import instagramLogo from '../../assets/images/instagram.svg';
import linkedinLogo from '../../assets/images/linkedin.svg';


const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <a href=''><img src={footerLogo} alt="Footer-logo" className="footer-logo" /></a>
                <div className='social-media-container'>
                    <a href=''><img src={facebookLogo} alt="Facebook logo" className="facebook-logo" /></a>
                    <a href=''><img src={instagramLogo} alt="Instagram logo" className="instagram-logo" /></a>
                    <a href=''><img src={linkedinLogo} alt="Linkedin logo" className="linkedin-logo" /></a>
                </div>
            </div>
        </>
    )
} 

export default Footer