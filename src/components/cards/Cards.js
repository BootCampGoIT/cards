import React from 'react';
import CardsItem from './cardsItem/CardsItem';
import css from './Cards.module.css';

const cards = [
    {
        id: "1",
        productName: "TV set",
        description: "Lorem ipsum dolor sit amet.",
        price: "$200"
    },
    {
        id: "2",
        productName: "Sony play..",
        description: "Lorem ipsum dolor  ipsum dol sit amet.",
        price: "$300"
    },
    {
        id: "3",
        productName: "Combine",
        description: "Lorem   ipsum dol ipsum dolor sit amet.",
        price: "$400"
    },
    {
        id: "4",
        productName: "Microwave",
        description: "Lorem ipsum dolor sit  ipsum dol amet.",
        price: "$500"
    },
    {
        id: "5",
        productName: "Combine",
        description: "Lorem   ipsum dol ipsum dolor sit amet.",
        price: "$400"
    },
    {
        id: "6",
        productName: "Microwave",
        description: "Lorem ipsum dolor sit  ipsum dol amet.",
        price: "$500"
    },
]

const Cards = () => {
    return (
        <div>
            <ul className={css.cardsList}>
                {cards.map(cardItem => <CardsItem card={cardItem} key={cardItem.id} />)}
            </ul>
        </div>
    );
}

export default Cards;