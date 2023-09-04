import { Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import SignIn from "../components/SignInForm";
import CreateAccountForm from "../components/CreateAccountForm";
import TestPage from "../pages/TestPage";

function AppRoutes(props) {
    return (
        <Routes>
            <Route index element={<TestPage />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<CreateAccountForm />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}
export default AppRoutes;
