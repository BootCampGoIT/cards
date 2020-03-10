import React from 'react';
import cart from '../../../assets/cartGold.png';
import css from './ModalCard.module.css';

const ModalCard = ({ card: { productName, img, description, price } }) => {
    return (
        <div className={css.modalCard}>
            <h2 className={css.productName}>{productName}</h2>
            <img src={img} alt={productName} className={css.cardImage} />
            <p className={css.description}>{description}</p>
            <div className={css.orderBlock}>
                <p className={css.price}> Price: {price}</p>
                <img src={cart} alt="cart" className={css.cart} />
            </div>
        </div>
    );
}

export default ModalCard;