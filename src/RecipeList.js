import React from 'react';
import style from './recipe.module.css';

function RecipeList(props) {
    return (
        <div className={style.recipe}>
            <h1 >{props.title}</h1>
            <ol>
                {props.ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p className={style.calorie}>{`Calories: ${props.calories} kcal`}</p>
            <img className={style.image} src={props.image} alt='/'/>
        </div>
    )
}

export default RecipeList
