import React from 'react';
import classes from './IncreaseDecreaseButton.module.css';

const IncreaseDecreaseButton = (props) => {
    return (
        <button className={classes['increase-button']} type={props.type || 'button'} onClick={props.onClick}>{props.message}</button>
    );
};

export default IncreaseDecreaseButton;