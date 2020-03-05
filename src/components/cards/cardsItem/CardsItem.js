import React from 'react';
import css from './CardsItem.module.css';
import cartGreen from '../../../assets/cartGreen.png';

const CardsItem = ({ card: { img, productName, description, price } = {} }) => {

    return (
        <li className={css.cardsItem}>
            <h2 className={css.productName}>{productName}</h2>
            <img src={img} alt={productName} className={css.cardImage} />
            <p className={css.description}>{description}</p>
            <div className={css.orderBlock}>
                <p className={css.price}> Price: {price}</p>
                <img src={cartGreen} alt="cart" className={css.cartGreen} />
            </div>
        </li>
    );
}

export default CardsItem;