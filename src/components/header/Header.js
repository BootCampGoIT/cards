import React from 'react';
import css from "./Header.module.css"
import Cart from '../cart/Cart';
import Button from '../button/Button';

const Header = () => {
    return (
        <div className={css.header}>
            <Button />
            <Cart />
        </div>
    );
}

export default Header;