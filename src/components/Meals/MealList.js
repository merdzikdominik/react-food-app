import React from 'react';
import MealPosition from './MealPosition';
import Card from '../UI/Card';
import classes from './MealList.module.css';

const MealList = (props) => {

    const getOrderedMeal = (meal) => {
        props.onReceiveMeals(meal);
    }

    return (
        <section className={classes['meal-list']}>
            <Card className={classes['meal-list__wrapper']}>
                <ul>
                    {props.meals.map(meal =>
                        <MealPosition
                            key={Math.random()}
                            mealTitle={meal.meal}
                            mealDescription={meal.description}
                            mealPrice={meal.price}
                            onMealData={getOrderedMeal}
                        />)
                    }
                </ul>
            </Card>
        </section>
    );
};

export default MealList;