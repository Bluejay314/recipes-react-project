import { Box } from "@mui/material";
import Page from "../components/Page";
import RecipeCard from "../components/RecipeCard";
import { useUserContext } from "../context/UserContext";

export default function ProfilePage() {
    const { currentUser, handleUpdateUser } = useUserContext();

    const favRecipes = currentUser.favourites?.map(rec => (
        <RecipeCard {...rec} />
    ));

    console.log(currentUser);

    return (
        <Page>
            <h1>My Favourites</h1>
            <Box sx={{m:"0 auto"}}>
                {favRecipes}
            </Box>
        </Page>
    )
}