import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";


const Meals = () => {
  const meals = useLoaderData();
  const {categories} = meals
  return (
    <div>
      <h3 className="text-5xl font-bold my-5 bg-gray-300 py-3">Meal Categories</h3>
      <div className="grid grid-cols-3 gap-4">
        {
          categories.map(category=> <Category key={category.idCategory} category={category}></Category>)
        }
      </div>
    </div>
  );
};

export default Meals;