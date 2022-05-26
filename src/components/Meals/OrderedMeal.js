import React, { useState, useContext } from 'react';
import IncreaseDecreaseButton from '../UI/IncreaseDecreaseButton';
import DishOrderContext from '../../store/dish-order-context';
import classes from './OrderedMeal.module.css';

const OrderedMeal = (props) => {
    const [actualAmount, setActualAmount] = useState({orderCount: +props.amount});
    const { orderCount } = actualAmount;
    const mealCtx = useContext(DishOrderContext);
    const { dishes } = mealCtx;

    

    const increaseAmountHandler = () => {
        setActualAmount((prevState) => {
            return {...prevState, orderCount: orderCount + 1};
        });
        // console.log(dishes);
        // props.onGetLatestOrderCount(orderCount);
        // console.log(orderCount);
    };

    const decreaseAmountHandler = () => {
        if (orderCount > 0) {
            setActualAmount((prevState) => {
                return {...prevState, orderCount: orderCount - 1};
            });
            // props.onGetLatestOrderCount(orderCount);
            // console.log(orderCount);
        };
    };

    // props.onGetLatestOrderCount(orderCount);

    return (
        <React.Fragment>
            <div className={classes['ordered-meal']}>
                <h2>{props.title}</h2>
                <div className={classes['ordered-meal__wrapper']}>
                    <div className={classes['ordered-meal__price-amount']}>
                        <h3>{props.price}</h3>
                        <span>x{props.amount}</span>
                    </div>
                    <div className={classes['ordered-meal__buttons']}>
                        <IncreaseDecreaseButton message="-" onClick={decreaseAmountHandler} />
                        <IncreaseDecreaseButton message="+" onClick={increaseAmountHandler}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default OrderedMeal;