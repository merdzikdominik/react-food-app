import React from 'react';
import classes from './Notification.module.css';
import Card from './UI/Card';

const Notification = () => {
    return (
        <Card className={classes['hero-section__welcome']}>
            <h1>Delicious Food, Delivered To You</h1>
            <div className={classes['hero-section-paragraph']}>
                <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
                <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs</p>
            </div>
        </Card>
    );
};

export default Notification;