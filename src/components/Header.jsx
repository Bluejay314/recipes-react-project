import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const title = "Home of Home Cooking";
const backgroundImage = "url(https://m.media-amazon.com/images/I/91caSxk4AML._AC_SL1500_.jpg)";

const headerStyling = {
    textShadow:"2px 2px black, 2px 2px 6px #aaaaaa"
}

const rootContainerStyle = {
    position: "relative",
    backgroundColor: "grey.800",
    color: "#fff",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: backgroundImage
}

export default function Header() {
    return (
        <Paper sx={rootContainerStyle}>
            {/* Overlay to control intensity of background image*/}
            <Box sx={{position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.6)"}}/>
            
            <Grid container >
                <Grid item md={12}>
                    <Box sx={{position: "relative", p: { xs: 2, md: 3 }, pr: { md: 0 }}}>
                        <Typography style={headerStyling} component="h1" variant="h2" color="inherit" gutterBottom>
                            {title}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}