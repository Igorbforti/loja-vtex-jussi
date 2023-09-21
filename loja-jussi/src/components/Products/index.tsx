import React from "react";
import Slider from 'react-slick';
import "./style.css"

import shelfImg1 from '../../assets/images/shelf-image1.svg';
import shelfImg2 from '../../assets/images/shelf-image2.svg';
import shelfImg3 from '../../assets/images/shelf-image3.svg';
import shelfImg4 from '../../assets/images/shelf-image4.svg';

const Products = () => {
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        arrows: true,
        slidesToScroll: 4,
        className: "shelf",
        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
            }
            }
        ]
    };

    const shelfs = [
        {
            url: shelfImg1,
            name: 'Nome do Produto #1',
            description: 'Descrição do produto #1',
            features: {
                feature1: 'Feature 1',
                feature2: 'Feature 2',
                feature3: 'Feature 3',
            },
            link: "#"
        },
        {
            url: shelfImg2,
            name: 'Nome do Produto #2',
            description: 'Descrição do produto #2',
            features: {
                feature1: 'Feature 1',
                feature2: 'Feature 2',
                feature3: 'Feature 3',
            },
            link: "#"
        },
        {
            url: shelfImg3,
            name: 'Nome do Produto #3',
            description: 'Descrição do produto #3',
            features: {
                feature1: 'Feature 1',
                feature2: 'Feature 2',
                feature3: 'Feature 3',
            },
            link: "#"
        },
        {
            url: shelfImg4,
            name: 'Nome do Produto #4',
            description: 'Descrição do produto #4',
            features: {
                feature1: 'Feature 1',
                feature2: 'Feature 2',
                feature3: 'Feature 3',
            },
            link: "#"
        },
    ]

    return (
        <Slider {...settings}>
            {shelfs.map((shelf) => {
                return (
                    <div className="shelf-box">
                        <img src={shelf.url} alt="" className="shelf-image"/>
                        <p className="shelf-name">{shelf.name}</p>
                        <p className="shelf-description">{shelf.description}</p>
                        <ul className="shelf-list">
                            <li className="shelf-feature">{shelf.features.feature1}</li>
                            <li className="shelf-feature">{shelf.features.feature2}</li>
                            <li className="shelf-feature">{shelf.features.feature3}</li>
                        </ul>
                        <a href={shelf.link} className="shelf-button">Ver solução</a>        
                    </div>
                )
            })}
        </Slider>
    )
}

export default Products