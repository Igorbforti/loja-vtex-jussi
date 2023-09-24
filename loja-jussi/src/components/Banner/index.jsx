import React from "react"
import "./style.css"

import bannerImage1 from '../../assets/images/banner-image1.svg';
import bannerImage2 from '../../assets/images/banner-image2.svg';
import bannerImage3 from '../../assets/images/banner-image3.svg';

const Banner = () => {
    return window.innerWidth > 768 ? (
        <>
            <div className="banner-container">
                <div className="banner-left">
                    <h1 className="banner-title">Criamos lojas que vendem mais.</h1>
                    <p className="banner-description">A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?</p>
                    <a href="" className="banner-left-btn">Veja nossas soluções</a>
                </div>
                <div className="banner-right">
                    <div className="banner-card">
                        <img src={bannerImage1} alt="" className="banner-product" />
                        <a href="" className="banner-product-btn">Comprar em 12x</a>
                    </div>
                    <div className="banner-card">
                        <img src={bannerImage2} alt="" className="banner-product" />
                        <a href="" className="banner-product-btn">Mais Detalhes</a>
                    </div>
                    <div className="banner-card">
                        <img src={bannerImage3} alt="" className="banner-product" />
                        <a href="" className="banner-product-btn">Adicionar à sacola</a>
                    </div>
                </div>
            </div>
        </>
    ) : (
        <div className="banner-container">
            <div className="banner-left">
                <h1 className="banner-title">Criamos lojas que vendem mais.</h1>
                <p className="banner-description">A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?</p>
                <a href="" className="banner-left-btn">Veja nossas soluções</a>
            </div>
        </div>
    )
}

export default Banner