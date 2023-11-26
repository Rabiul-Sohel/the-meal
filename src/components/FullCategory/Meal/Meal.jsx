import { Link } from "react-router-dom";


const Meal = ({ meal }) => {
  const { strMeal, strMealThumb, idMeal } = meal;
  return (
    <div>
      <img className="rounded-md" src={strMealThumb} alt="" />
      <h3 className="text-xl font-semibold my-1"> {strMeal} </h3>
      <p>Meal Id: {idMeal} </p>
      <Link to={`/meal/${idMeal}`}>
        <button className="text-xl bg-gray-200 p-2 rounded-md">Details</button>
      </Link>
    </div>
  );
};

export default Meal;