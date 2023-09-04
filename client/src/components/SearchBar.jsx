import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Button } from "@mui/material";

export const Search = styled("form")(({ theme }) => ({
    position: "relative",
    borderRadius: "0.5em",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.2),
    },
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));



export default function SearchBar({ pholder = "Search…" }) {
    let [queryInput, setQueryInput] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(queryInput);
    };


    return (
        <Search onSubmit={handleSubmit}>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase 
                placeholder={pholder}
                value={queryInput}
                onChange={(e) => setQueryInput(e.target.value)}
                inputProps={{ "aria-label": "search" }}
            />
        </Search>
    );
}
