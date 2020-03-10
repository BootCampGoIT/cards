import React, { Component } from 'react'
import css from './CardsItem.module.css';
import ModalBackdrop from '../../modalBackdrop/ModalBackdrop';
import ModalCard from '../modalCard/ModalCard';



class CardsItem extends Component {
    state = {
        isOpen: false
    }

    handleOpenCard = () => {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }))
    }

    render() {
        const { card: { img, productName, price }, card } = this.props;
        return (
            <>
                <li className={css.cardsItem} onClick={this.handleOpenCard}>
                    <h2 className={css.productName}>{productName}</h2>
                    <img src={img} alt={productName} className={css.cardImage} />
                    <p className={css.price}> Price: {price}</p>
                </li>
                {
                    this.state.isOpen &&
                    <ModalBackdrop isOpen={this.state.isOpen} handleOpen={this.handleOpenCard} >
                        <ModalCard card={card} />
                    </ModalBackdrop>
                }
            </>
        );
    }
}

export default CardsItem;
