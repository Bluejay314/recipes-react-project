import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Page from "../components/Page";
import useRecipeAPI, { fetchTypes } from "../hooks/useRecipeAPI";
import RecipeCard from "../components/RecipeCard";
import { Box, CssBaseline, Divider, Stack, Typography } from "@mui/material";

const categories = ["dessert", "beef", "seafood"];

export default function HomePage() {
    const featuredData = useRecipeAPI({
        type: fetchTypes.random,
        amount: 2
    });

    const featuredItems = featuredData?.map(recipe => (
            <RecipeCard 
                key={recipe["idMeal"]}
                featured
                title={recipe["strMeal"]}
                image={recipe["strMealThumb"]}
                description={recipe["strTags"]}
                category={recipe["strCategory"]}
                instructions={recipe["strInstructions"]}
            />
    ));

    const toDisplay = categories.map(cat => (
        <MealCategory category={cat} amount={4} />
    ));

    return (
        <Page>
            <CssBaseline />
            <Box mt={12} sx={{display:"flex", justifyContent:"center", gap:"50px"}}>
                {featuredItems}
            </Box>
            <Stack spacing={12} sx={{
                display:"flex", 
                flexDirection:"column", 
                mt:6,
                justifyContent:"flex-start",
                alignItems:"center"
            }} >
                

                {toDisplay}
            </Stack>
        </Page>
    );
}

function MealCategory({ category, amount }) {
    const categoryData = useRecipeAPI({
        type: fetchTypes.category,
        "category": category,
        "amount": amount
    });

    const categoryItems = categoryData?.map(recipe => (
        <Grid item key={recipe["idMeal"]} sm={12} lg={4} xl={3}>
        <RecipeCard
            featured={false}
            title={recipe["strMeal"]}
            image={recipe["strMealThumb"]}
            description={recipe["strTags"]}
            category={recipe["strCategory"]}
            instructions={recipe["strInstructions"]}
        />  
        </Grid>          
    ));
    
    return (
        <Box sx={{maxWidth:"70vw"}} >
            <Typography variant="h3" color="inherit" sx={{textAlign:"left", fontWeight:"bold"}}>
                {category}
            </Typography>
            <Divider variant="middle" />
            <Grid container spacing={8} sx={{ py: 6}} >
                {categoryItems}
            </Grid>
        </Box>
    )
}
