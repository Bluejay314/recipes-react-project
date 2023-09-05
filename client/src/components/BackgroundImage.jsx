import { Box } from "@mui/material";


export default function BackgroundImage({ image, opacity, children }) {
    return (
        <Box sx={{
            position: "absolute",
            inset: "0",
            margin: "0",
            backgroundColor: "grey.800",
            color: "#fff",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: image,
        }}>
            <Box sx={{position: "absolute", inset: 0, backgroundColor: `rgba(0,0,0,${opacity})`}}/>
            {children}
        </Box>
    )
}