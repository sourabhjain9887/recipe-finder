import axios from 'axios';
import React , { useEffect , useState}from 'react'
import RecipeList from './RecipeList'
import './App.css'

function SearchForm() {
    const app_id = "f59f4255";
    const app_key= "6ecc8586285f9c95a2f74308ba673b8a";
    const [search , setSearch] = useState('');
    const [recipes,setRecipes] = useState([]);
    const [query,setQuery] = useState('');

    useEffect(()=>{
        axios.get(`https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`)
        .then(res=>setRecipes(res.data.hits));
    },[query])

    const submitHandler = (e)=>{
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }
    return (
        <div className='App'>
            <form className='search-form' onSubmit={submitHandler}>
                <input className='search-bar' type ='text' placeholder='Enter Name Here ' value={search} onChange={(e)=>{setSearch(e.target.value)}}></input>
                <button className='search-button' type ='submit'>Search</button>
            </form>
            <div className='recipes'>
                {recipes.map(recipe=>( <RecipeList key={recipe.recipe.calories} calories={recipe.recipe.calories}
                title={recipe.recipe.label} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/> ))}
            </div>
        </div>
    )
}

export default SearchForm
