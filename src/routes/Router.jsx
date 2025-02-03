import { Routes, Route } from 'react-router';
import Home from '../pages/Home';
import LoginOut from '../pages/Login';
import NotFound from '../pages/NotFoundPage';
import Contact from '../components/Contact/Contact';
import PrivateRoute from '../auth/PrivateRoute';
import SuperHeroDetails from '../components/SuperheroDetailsPage.jsx/SuperheroDetailsPage';
import SearchPage from "../pages/SearchPage";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path='/loginout-page' element={<LoginOut />} />
            <Route path='/contact' element={
                <PrivateRoute>
                    <Contact />
                </PrivateRoute>
            } />
            <Route path='/hero/:id' element={
                <PrivateRoute>
                    <SuperHeroDetails />
                </PrivateRoute>
            } />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}