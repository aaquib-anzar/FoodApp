import Header from "../components/Layout/Header";
import MealsSummary from "../components/Meals/MealsSummary";
import { Outlet } from "react-router-dom";

function RootPage(props) {
  return (
    <>
      <Header showCart={props.showCart} />
      <MealsSummary />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default RootPage;
