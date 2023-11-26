
import { NavLink } from 'react-router-dom';
import './Header.css'
import { useRef } from 'react';

const Header = () => {
  const inputRef = useRef(null)
  const handleGetData = () => {
    const alphabet = inputRef.current.value;
    return alphabet;
    
  }
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-6xl font-bold">The Meal</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/meals">Meals</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <div className='flex'>
        <input
          className="bg-slate-200 p-2 rounded-s-md"
          type="text"
          placeholder="search by alphabet"
          id='alphabet'
          name='alphabet'
          ref={inputRef}
        />
        <button onClick={handleGetData} className="bg-blue-200 p-2 rounded-e-md">Search</button>
      </div>
    </div>
  );
};

export default Header;