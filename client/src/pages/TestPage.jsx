import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import RecipeCard from "../components/RecipeCard";
import useRecipeAPI, { fetchTypes } from "../hooks/useRecipeAPI";
import Page from "../components/Page";

export default function TestPage() {
    const recipes = useRecipeAPI({
        type: fetchTypes.search, 
        query: "chocolate"
    });

    const items = recipes?.map(recipe => (
        <Grid item key={recipe["idMeal"]} xs={12} sm={6} md={4}>
            <RecipeCard 
                title={recipe["strMeal"]}
                image={recipe["strMealThumb"]}
                description={recipe["strTags"]}
                category={recipe["strCategory"]}
            />
        </Grid>
    ))

    return (
        <Page>
            <CssBaseline />
            <Container sx={{ py: 8 }} maxWidth="lg">
                <Grid container spacing={4}>
                    {items}
                </Grid>
            </Container>
        </Page>
    );
}

function TestCard({ data }) {
    return (
        <Grid item key={data} xs={12} sm={6} md={4}>
            <Card
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <CardMedia
                    component="div"
                    sx={{
                        // 16:9
                        pt: "56.25%",
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                    >
                        Heading
                    </Typography>
                    <Typography>
                        This is a media card. You can use
                        this section to describe the
                        content.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                </CardActions>
            </Card>
        </Grid>
    )

}