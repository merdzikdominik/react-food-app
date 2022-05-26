import React from 'react';
import classes from './AddButton.module.css';

const AddButton = (props) => {
    return (
        <button className={classes['add-button']} type={props.type || 'button'} onClick={props.onClick}>+Add</button>
    );
};

export default AddButton;