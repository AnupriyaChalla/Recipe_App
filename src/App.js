import { useEffect, useState } from 'react';
import Recipe from './Recipe'; // Assuming the file path is correct

import './App.css';

const App = () => {
  const APP_ID = '6e4718a0';
  const APP_KEY = 'dba1e1b7ddee29d5eaaff91339398b0e';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${`6e4718a0`}&app_key=${`dba1e1b7ddee29d5eaaff91339398b0e`}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
    <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
        Search
        </button>
    </form>
    <div className="recipes">
        {recipes.map((recipe) => (
        <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
        />
        ))}
    </div>
    </div>
);
};

export default App;
