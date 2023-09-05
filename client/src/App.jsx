import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { defaultTheme } from "./themes/defaultTheme";
import { UserProvider } from "./context/UserContext";

function App() {
    return (
        <div className="App">
			<UserProvider>
				<ThemeProvider theme={defaultTheme}>
					<AppRoutes />
				</ThemeProvider>
			</UserProvider>
        </div>
    );
}

export default App;
