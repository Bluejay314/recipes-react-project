import { Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import SignInForm from "../components/SignInForm";
import CreateAccountForm from "../components/CreateAccountForm";
import TestPage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import SearchPage from "../pages/SearchPage";
import ProfilePage from "../pages/ProfilePage";

function AppRoutes(props) {
    return (
        <Routes>
            <Route path="/" element={
                <ProtectedRoute redirectPath = "/account/login">
                    <TestPage />
                </ProtectedRoute>
            } />

            <Route path="/account" element={<LoginPage />}>
                <Route path="/account/login" element={<SignInForm />} />
                <Route path="/account/signup" element={<CreateAccountForm />} />
            </Route>
            <Route path="/search/:q" element={<SearchPage />} />
            <Route path="/profile" element={<ProfilePage />}></Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}
export default AppRoutes;
