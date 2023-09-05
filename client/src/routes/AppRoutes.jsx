import { Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import SignInForm from "../components/SignInForm";
import CreateAccountForm from "../components/CreateAccountForm";
import TestPage from "../pages/TestPage";
import LoginPage from "../pages/LoginPage";

function AppRoutes(props) {
    return (
        <Routes>
            <Route index element={<TestPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<CreateAccountForm />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}
export default AppRoutes;
