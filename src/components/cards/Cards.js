import React from 'react';
import CardsItem from './cardsItem/CardsItem';
import css from './Cards.module.css';

const Cards = ({ data }) => {
    return (
        <div>
            <ul className={css.cardsList}>
                {
                    data.map(card => <CardsItem key={card.id} card={card} />)
                }
            </ul>
        </div>
    );
}

export default Cards;