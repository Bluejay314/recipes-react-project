import { useParams } from "react-router-dom";
import Page from "../components/Page";
import useRecipeAPI, { fetchTypes } from "../hooks/useRecipeAPI";
import { Container, CssBaseline, Grid, Typography } from "@mui/material";
import RecipeCard from "../components/RecipeCard";

export default function SearchPage() {
    const { q } = useParams();
    console.log(q);
    const recipes = useRecipeAPI({
        type: fetchTypes.search, 
        query: q
    });

    const searchResult = recipes?.map(recipe => (
        <Grid item key={recipe["idMeal"]} xs={12} sm={6} md={4}>
            <RecipeCard 
                title={recipe["strMeal"]}
                image={recipe["strMealThumb"]}
                description={recipe["strTags"]}
                category={recipe["strCategory"]}
            />
        </Grid>
    ))

    if(searchResult) {
        return (
            <Page>
            <CssBaseline />
            <Container sx={{ py: 8 }} maxWidth="lg">
                <Grid container spacing={4}>
                    {searchResult}
                </Grid>
            </Container>
        </Page>
        )
    }

    return (
        <Page>
            <CssBaseline />
            <Typography component="h1" variant="h4" color="inherit">
                Nothing found...
            </Typography>
        </Page>
    );
}