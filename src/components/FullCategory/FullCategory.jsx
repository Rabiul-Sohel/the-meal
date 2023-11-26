import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Meal from "./Meal/Meal";




const FullCategory = () => {
  const fullCategory = useLoaderData();
  const {categoryName} = useParams()
  const { meals } = fullCategory;
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1)
  }
  
  
  
  return (
    <div className="my-10">
      <h2 className="text-green-500 font-bold text-3xl my-5 underline">Menus of {categoryName} ({meals.length}) </h2>
      
      <div className="grid grid-cols-3 gap-5">
        {
          meals.map(meal=><Meal key={meal.idMeal} meal={meal}></Meal>)
        }
      </div>
      <button onClick={handleGoBack} className="text-xl bg-gray-200 p-2 rounded-md">Go Back</button>
    </div>
  );
};

export default FullCategory;