import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import About from './components/About/About.jsx'
import Meals from './components/Categories/Categories.jsx'
import FullCategory from './components/FullCategory/FullCategory.jsx'
import MealDetails from './components/MealDetails/MealDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/meals",
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
        element: <Meals></Meals>,
      },
      {
        path: "/category/:categoryName",
        loader: ({ params }) =>
          fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryName}`),
        element:<FullCategory></FullCategory>
      },
      {
        path: "/meal/:idMeal",
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`),
        element: <MealDetails></MealDetails>  
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
