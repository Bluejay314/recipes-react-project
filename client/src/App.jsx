import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";
import { defaultTheme } from "./themes/defaultTheme";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RecipeCard from "./components/RecipeCard";

function App() {
    return (
        <div className="App">
			<ThemeProvider theme={defaultTheme}>
				<AppRoutes />
			</ThemeProvider>
        </div>
    );
}

export default App;
