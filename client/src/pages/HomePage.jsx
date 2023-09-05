import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Page from "../components/Page";

export default function HomePage() {

    return (
        <Page>
            <CssBaseline />
            <Container sx={{ py: 8 }} maxWidth="lg">
                <Grid container spacing={4}>
                </Grid>
            </Container>
        </Page>
    );
}