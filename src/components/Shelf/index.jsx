import React from "react"

import "./style.css"
import stripes from '../../assets/images/stripes.svg';

import Products from "../Products";

const Shelf = () => {
    return (
        <>
            <div className="shelf-container">
            <div className="shelf-title-container">
                <img src={stripes} />
                <h1 className="shelf-title">Nossas soluções</h1>
            </div>
                <Products />
            </div>
        </>
    )
}

export default Shelf