import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import ContactPage from "../pages/Contact";
import AboutPage from "../pages/About";
import HomePage from "../pages/Index";
import RootLayout from "../pages/Layout";
import LearnLayout from "../pages/learn/Layout";
import ThinkingInReact from "../pages/learn/ThinkingInReact";
import TestPage from "../pages/learn/Test";
import ContributePage from "../pages/Contribute";
import InstallationPage from "../pages/learn/Installation";
import QuickStartPage from "../pages/learn/Index";
import LoginPage from "../pages/Login";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import ErrorHandler from "../errors/ErrorHandler";
import PageNotFound from "../pages/PageNotFound";

const isLoggedIn = true;
const userData: { email: string } | null = isLoggedIn ? { email: "kero@gmail.com" } : null;

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* Root Layout */}
            <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />} >
                <Route index element={<HomePage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="contribute" element={
                    <ProtectedRoute isAllowed={isLoggedIn} redirectPath="/login" data={userData} >
                        <ContributePage />
                    </ProtectedRoute>} />
                <Route path="login" element={
                    <ProtectedRoute isAllowed={!isLoggedIn} redirectPath="/contribute" data={userData} >
                        <LoginPage />
                    </ProtectedRoute>} />
            </Route>

            {/* Learn Layout */}
            <Route path="/learn" element={<LearnLayout />} >
                <Route index element={<QuickStartPage />} />
                <Route path="thinking-in-react" element={<ThinkingInReact />} />
                <Route path="installation" element={<InstallationPage />} />
                <Route path="test" element={<TestPage />} />
            </Route>

            {/* Page Not Found */}
            <Route path="*" element={<PageNotFound />} />
        </>
    )
);
export default router;

/*
    - Layout.tsx
    - Page Component ==> Index.tsx => Home Page 
    - Page Component ==> Contact.tsx => Contact Page 
    - Page Component ==> About.tsx => About Page 
*/