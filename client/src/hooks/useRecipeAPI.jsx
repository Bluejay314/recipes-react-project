import { useState, useEffect } from "react";
import axios from "axios"

const fetchURL = "https://www.themealdb.com/api/json/v1/1/";

export const fetchTypes = {
    search: "search",
    random: "random",
    category: "category"
}

export default function useRecipeAPI(options) {
    const [data, setData] = useState(options);
    const [response, setResponse] = useState(null);

    useEffect(() => {
        let ignore = false;

        let fetchFunc = setFunction(options.type);
        fetchFunc(options).then(res => {
            if(!ignore) setResponse(res)
        });
        
        return () => {ignore = true;}
    }, [data]);

    return response;
}

function setFunction(type) {
    switch(type) {
        case fetchTypes.search: return search;
        case fetchTypes.random: return getRandom;
        case fetchTypes.category: return getFromCategory;
        default: null;
    }
}

async function search(options) {
    const url = `${fetchURL}search.php?s=${options.query}`
    const res = await axios.get(url);
    const data = await res.data;
    return data.meals;
}

async function getRandom(options) {
    const url = `${fetchURL}random.php`;
    const recipes = [];

    while(recipes.length < options.amount) {
        const res = await axios.get(url);
        const data = await res.data;

        console.log(`recipes.idMeal = ${recipes.idMeal}, data.meals[0].idMeal = ${data.meals[0].idMeal}`);

        if(!recipes.find(recipe => recipe.idMeal === data.meals[0].idMeal)) 
            recipes.push(data.meals[0]);
        
    }

    return recipes;
}

async function getFromCategory(options) {
    const url = `${fetchURL}filter.php?c=${options.category}`;
    const res = await axios.get(url);
    const data = await res.data.meals
        .slice(0, options.amount)
        .map(meal => meal.idMeal)

    const output = [];
    for(const id of data) {
        const mealUrl = `${fetchURL}lookup.php?i=${id}`
        const meal = await axios.get(mealUrl)
        const mealData = await meal.data;
        output.push(mealData.meals[0])
    }

    console.log(output)
    return output;
}