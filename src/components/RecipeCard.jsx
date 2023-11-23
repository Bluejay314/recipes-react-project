import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Box, CardActionArea, Modal } from "@mui/material";
import { useUserContext } from "../context/UserContext";
import { useState } from "react";

export default function RecipeCard({
    featured = false,
    title,
    image,
    description,
    category,
    instructions=""
}) {
    const { currentUser, handleUpdateUser } = useUserContext();
    const [isFavourite, setFavourite] = useState(false);
    const favouriteIconColour = isFavourite? "red" : "inherit";
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const instructionItems = instructions.split("\\n").map((step, i) => (
        <Box sx={{textAlign:"left"}}>
            <p><strong>Step {i}</strong></p>
            <p>{step}</p>
        </Box>
    ))

    function handleAddToFavourites(event) {
        event.preventDefault();
        setFavourite(true)
        const update = [
            ...currentUser["favourites"],
            {
                title: title,
                image: image,
                description: description,
                category: category,
            },
        ];
        handleUpdateUser({
            favourites: update,
        });
    }

    if (featured == true) {
        return (
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="600"
                        image={image}
                        alt="recipe thumbnail"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }

    return (
        <>
            <Card maxWidth={345}>
                <CardActionArea onClick={handleOpen}>
                    <CardHeader title={title} subheader={category} />
                    <CardMedia
                        component="img"
                        image={image}
                        alt="recipe image"
                        height="194"
                    />

                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions disableSpacing>
                        <IconButton sx={{color:favouriteIconColour}} onClick={(e) => handleAddToFavourites(e)}>
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                sx={{overflow:"scroll"}}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "50%",
                        bgcolor: "background.paper",
                        border: "2px solid #000",
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Card >
                        <CardHeader title={title} mt={5} />
                        <CardMedia
                            component="img"
                            image={image}
                            alt="recipe image"
                            height="194"
                        />
                    </Card>
                    <CardContent>
                    <h3>Instructions</h3>
                    {instructions}
                    </CardContent>
                </Box>
            </Modal>
        </>
    );
}
