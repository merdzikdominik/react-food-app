import React, { useState } from 'react';
import AddButton from '../UI/AddButton';
import classes from './MealPosition.module.css';

const MealPosition = (props) => {

    // const [dish, setDish] = useState();
    const [dishAmount, setDishAmount] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();

        const orderedDish = {
            'meal': props.mealTitle,
            // 'description': props.mealDescription,
            'price': props.mealPrice,
            'dishAmount': dishAmount,
        }

        // setDish(orderedDish);

        props.onMealData(orderedDish);


        setDishAmount('');
    }

    const dishAmountHandler = (event) => {
        setDishAmount(event.target.value);
    };

    return (
        <li className={classes['meal-position-wrapper']}>
            <div className={classes['position-left-side']}>
                <h2>{props.mealTitle}</h2>
                <p>{props.mealDescription}</p>
                <h4>{props.mealPrice}</h4>
            </div>
            <form onSubmit={submitHandler}>
                <div className={classes['position-right-side']}>
                    <div className={classes['provide-order__wrapper']}>
                        <label htmlFor="amount">Amount</label>
                        <input id="amount" type="number" onChange={dishAmountHandler} value={dishAmount} required min="0"/>
                    </div>
                    <AddButton type="submit"/>
                </div>
            </form>
        </li>
    );
};

export default MealPosition;