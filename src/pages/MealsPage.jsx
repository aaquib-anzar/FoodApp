import Meals from "../components/Meals/Meals";
import {useLoaderData} from "react-router-dom";
import { useState } from "react";
function MealsPage() {

  const loadedData = useLoaderData();
  return (
    <>
      <Meals loadedData={loadedData}/>
    </>
  );
}
export default MealsPage;

export async function loader({ params }) {

  const type = params.meals
  const response = await fetch(
    `https://httprequest-bd06d-default-rtdb.firebaseio.com/${type}.json`
  );

  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data = await response.json();
  return ({Data:data,Type:type});
}
