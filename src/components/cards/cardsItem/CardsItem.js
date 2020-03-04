import React from 'react';
import css from './CardsItem.module.css';

const CardsItem = ({ card: { productName = "noneName", description = "none", price = "0" } = {} }) => {

    return (
        <li className={css.cardsItem}>
            <h2>{productName}</h2>
            <p>{description}</p>
            <p>{price}</p>
        </li>
    );
}

export default CardsItem;