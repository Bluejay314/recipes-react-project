import { Typography } from "@mui/material";
import Page from "../components/Page";

export default function ErrorPage() {
    return (
        <Page>
             <Typography component="h1" variant="h4" color="inherit">
                Page Not Found
            </Typography>
        </Page>
    )
}