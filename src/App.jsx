// library
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Header from './structure_components/Header';
import Nav from './structure_components/Nav';
import Footer from './structure_components/Footer';

import HomePage from './pages/HomePage';
import RentPage from './pages/RentPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {

    return (
        <BrowserRouter>
            <Header/>
            <Nav/>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/rents" element={<RentPage/>}></Route>
                <Route path="/login" element={<LoginPage/>}></Route>
                <Route path="/register" element={<RegisterPage/>}></Route>

            </Routes>
            <Footer/>
        </BrowserRouter>
    );

}

export default App