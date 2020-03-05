import React, { Component } from 'react'
import css from "./Cart.module.css";
import cart from '../../assets/cartGold.png';
import ModalBackdrop from '../modalBackdrop/ModalBackdrop';

class Cart extends Component {
    state = {
        isOpen: false
    }

    handleOpenCart = () => {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }))
    }


    render() {
        return (
            <div className={css.cart}>
                <img src={cart} alt="cart" className={css.cartIcon} onClick={this.handleOpenCart} />
                {this.state.isOpen && <ModalBackdrop isOpen={this.state.isOpen} handleOpenCart={this.handleOpenCart} />}
            </div>
        );
    }
}

export default Cart;
