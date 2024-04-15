import classes from "./MealsAvailable.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

const MealsAvailable = ({ loadedData }) => {
  const { Data, Type } = loadedData;
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadedMeals = [];

    for (const key in Data) {
      loadedMeals.push({
        id: key,
        name: Data[key].name,
        description: Data[key].description,
        price: Data[key].price,
      });
    }
    setMeals(loadedMeals);
  }, [Type]);
  let content = <p className={classes.error}>Failed to fetch.</p>;
  if (isLoading) {
    content = <p className={classes.loading}>Loading..</p>;
  }
  if (meals.length > 0) {
    content = meals.map((meal) => (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));
  }
  return (
    <>
      <section className={classes.meals}>
        <Card>
          <ul>{content}</ul>
        </Card>
      </section>
    </>
  );
};
export default MealsAvailable;
