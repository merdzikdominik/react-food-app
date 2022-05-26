import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {
    const styles = `${classes['card']} ${props.className}`;

    return (
        <div className={styles} onClick={props.onClick}>
            {props.children}
        </div>
    );
};

export default Card;