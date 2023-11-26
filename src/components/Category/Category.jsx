import { Link } from "react-router-dom";


const Category = ({ category }) => {

  const {idCategory, strCategory, strCategoryDescription, strCategoryThumb} = category
  return (
    <div className="border-2 border-red-500 rounded-lg justify-start flex flex-col ">
      <img className="p-2" src={strCategoryThumb} alt="" />
      <h3 className="text-3xl font-semibold"> {strCategory} </h3>
      <p className="flex-grow"> {strCategoryDescription} </p>
      <Link to={`/category/${strCategory}`} >
        <button className="bg-red-400 p-2 m-2 rounded-lg text-white font-semibold">See Category Meal</button>
      </Link>
    </div>
  );
};

export default Category;