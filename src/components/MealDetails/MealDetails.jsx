import { useLoaderData } from "react-router-dom";


const MealDetails = () => {
  const mealDetails = useLoaderData();
  const { meals } = mealDetails;
  
  return (
    <div>
      <h3>Name: {meals[0].strMeal} </h3>
      
    </div>
  );
};

export default MealDetails;