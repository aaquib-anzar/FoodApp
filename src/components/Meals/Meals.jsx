import MealsSummary from "./MealsSummary";
import MealsAvailable from "./MealsAvailable";

const Meals = ({loadedData}) => {
    return(
        <>
        
        <MealsAvailable loadedData = {loadedData}/>
        </>
    )
}
export default Meals

//<MealsSummary/>