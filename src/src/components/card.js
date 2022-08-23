import React from "react";

const Cards = ({ item, handleClick }) => {

    const { title, author, price, img, qtd } = item;

    return (
        <div className="cards">
            <div className="image_box">
                <img src={img}  alt=""/>
            </div>
            <div className="details">
                <p>{title}</p>
                <p>{author}</p>
                <p>R${price}</p>
                <p>{qtd} unidades</p>
                <button onClick={() => handleClick(item)}>Adicionar à cesta</button>
            </div>
        </div>

    );
};

export default Cards;