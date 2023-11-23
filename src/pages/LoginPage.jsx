import { Box, Grid, Typography } from "@mui/material";
import SignInForm from "../components/SignInForm";
import BackgroundImage from "../components/BackgroundImage";
import { Outlet } from "react-router-dom";

const title = "Home of Home Cooking";

const style = {
    position: "absolute",
    inset: "0",
    m: "0 auto",
    px: 8,
    pt: 4,
    width: {xs:"100%", md:"60vw", lg: "40vw"},
    backgroundColor: "white",
    color: "black"
}

export default function LoginPage() {
    return (
        <>
        <BackgroundImage image="url(https://m.media-amazon.com/images/I/91caSxk4AML._AC_SL1500_.jpg)" opacity="0.4" />
            <Grid container >
                <Grid item md={12}>
                    <Box sx={style}>
                        <Typography component="h1" variant="h2" color="inherit">
                            {title}
                        </Typography>
                        <Outlet />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}