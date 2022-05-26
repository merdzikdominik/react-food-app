import React from 'react';
import Notification from './Notification';
import classes from './HomeScreen.module.css';

const HomeScreen = (props) => {
    return (
        <section className={classes['hero-section']}>
            <div className={classes['hero-section__welcome']}></div>
            <Notification />
        </section>
    );
};

export default HomeScreen;