import React from 'react';
import CartButton from './Cart/CartButton';
import classes from  './Navbar.module.css';

const Navbar = (props) => {
    return (
        <nav className={classes['navbar-wrapper']}>
            <div className={classes['navbar-logo']}>
                <span className={classes['first-logo-half']}>React</span>
                <span className={classes['second-logo-half']}>Meals</span>
            </div>
            <CartButton />
        </nav>
    );
};

export default Navbar;