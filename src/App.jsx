// library
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style.css'

// Structure Components
import Header from './structure_components/Header';
import Footer from './structure_components/Footer';

// Pages
import HomePage from './pages/HomePage';
import RentPage from './pages/RentPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {

    return (
        <BrowserRouter basename="/HomeStayCamLua">
            {/* Nav is now part of Header — no separate <Nav/> needed */}
            <Header />
            <Routes>
                <Route path="/"         element={<HomePage />} />
                <Route path="/rents"    element={<RentPage />} />
                <Route path="/login"    element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );

}

export default App