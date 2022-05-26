import React, { useState } from 'react';
import DishOrderContext from './store/dish-order-context';
import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';
import MealList from './components/Meals/MealList';
import './App.css';

const INITIAL_MEALS = [{
  "meal": "Sushi",
  "description": "Finest fish and veggies",
  "price": "$22.99"
},
{
  "meal": "Schnitzel",
  "description": "A german specialty",
  "price": "$16.99"
},
{
  "meal": "Barbecue Burger",
  "description": "American, raw, meaty",
  "price": "$12.99"
},
{
  "meal": "Green Bowl",
  "description": "Healthy and green",
  "price": "$14.99"
}];

// onReceiveMeals={getOrderedMeal}

function App() {
  const [dishes, setDishes] = useState([]);
  // const [mealState, setMealState] = useState('');
  // const [priceState, setPriceState] = useState('');
  // const [amountState, setAmountState] = useState('');
  // const ctx = useContext(DishOrderContext);

  const getOrderedMeal = (mealObject) => {
    // const {meal, price, dishAmount} = mealObject;
    setDishes((prevMeal) => {
      return [...prevMeal, mealObject];
    });
    // setMealState(meal);
    // setPriceState(price);
    // setAmountState(dishAmount);
    // console.log(dishes);
  };

  return (
  <React.Fragment>
    <DishOrderContext.Provider value={{
      'dishes': dishes
      // 'meal': mealState,
      // 'price': priceState,
      // 'amount': amountState
    }}>
      <Navbar />
    </DishOrderContext.Provider>
    <main>
      <HomeScreen />
      <MealList meals={INITIAL_MEALS} onReceiveMeals={getOrderedMeal}/>
    </main>
  </React.Fragment>
  );
}

export default App;
