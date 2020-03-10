import React from 'react';
import css from "./Header.module.css"
import Cart from '../cart/Cart';
import Navigation from './nav/Navigation';

const Header = () => {
    return (
        <div className={css.header}>
            <Navigation />
            <Cart />
        </div>
    );
}

export default Header;