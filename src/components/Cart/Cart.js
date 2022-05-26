import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import Card from '../UI/Card';
import DishOrderContext from '../../store/dish-order-context';
import OrderedMeal from '../Meals/OrderedMeal';
import classes from './Cart.module.css';

const Backdrop = (props) => {
    return (
        <div className={classes['backdrop']} onClick={props.onClick}></div>
    );
};

const CartView = (props) => {
    const mealContext = useContext(DishOrderContext);
    const { dishes } = mealContext;
    const [meals, setMeals] = useState(dishes);
    const [actualAmount, setActualAmount] = useState({orderCount: 0});
    const { orderCount } = actualAmount;

    const getLatestOrderCount = (orderAmount) => {
        setActualAmount((prevState) => {
            return {...prevState, orderCount: orderAmount};
        });
    }


    return (
        <Card className={classes['cart-wrapper']}>
            {meals.map(meal => 
                <OrderedMeal
                    key={Math.random()}
                    title={meal.meal}
                    price={meal.price}
                    amount={meal.dishAmount >= orderCount ? meal.dishAmount : orderCount}
                    onGetLatestOrderCount={getLatestOrderCount}
                />)
            }
        </Card>
    );
};

const Cart = (props) => {

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<CartView />, document.getElementById('cart-root'))}
        </React.Fragment>
    );
};

export default Cart;