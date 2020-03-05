import React from 'react';
import css from './Navigation.module.css';

const Navigation = (props) => {
    return (
        <div className={css.navigation}>
            <nav>
                <ul className={css.navigationList}>
                    <li className={css.navigationListItem}>
                        <a href="#Home" className={css.navlink}>Home</a>
                    </li>
                    <li className={css.navigationListItem}>
                        <a href="#About" className={css.navlink}>About</a>
                    </li>
                    <li className={css.navigationListItem}>
                        <a href="#SignIn" className={css.navlink}>SignIn</a>
                    </li>
                    <li className={css.navigationListItem}>
                        <a href="#SignUp" className={css.navlink}>SignUp</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;