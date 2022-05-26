import React, { useState } from 'react';
import Card from '../UI/Card';
import Cart from './Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import classes from './CartButton.module.css';
// import DishOrderContext from '../../store/dish-order-context';

const CartButton = (props) => {
    // const mealContext = useContext(DishOrderContext);
    const [clicked, setClicked] = useState(false);
    
    const cartHandler = (event) => {
        clicked === false ? setClicked(true) : setClicked(false);
    };

    const backdropHandler = (event) => {
        if(event.target.className.includes('backdrop')) setClicked(false);
    }

    return (
        <React.Fragment>
            <Card className={classes['cart-button-wrapper']} onClick={ cartHandler }>
                <FontAwesomeIcon icon={ faShoppingCart } className={classes['fa-icon-settings']} />
                <span>Your Chart</span>
                <Card className={classes['counter']}>1</Card>
            </Card>
            {clicked && <Cart onClick={backdropHandler}/>}
        </React.Fragment>
    );
};

export default CartButton;