import { useState, useEffect } from "react";
import axios from "axios"

const fetchURL = "https://www.themealdb.com/api/json/v1/1/";

export const fetchTypes = {
    search: "search",
    random: "random"
}

export default function useRecipeAPI(options) {
    const [bar, setBar] = useState(options);
    const [response, setResponse] = useState(null);

    useEffect(() => {
        let ignore = false;

        let fetchFunc = null;
        if(options.type === fetchTypes.search) 
            fetchFunc = search;
        else if(options.type === fetchTypes.random)
            fetchFunc = getRandom;

        fetchFunc(options).then(res => {
            if(!ignore) setResponse(res)
        });
        
        return () => {ignore = true;}
    }, [bar]);

    return response;
}

async function search(options) {
    const url = `${fetchURL}search.php?s=${options.query}`
    const res = await axios.get(url);
    const data = await res.data;
    return data.meals;
}

async function getRandom() {

}