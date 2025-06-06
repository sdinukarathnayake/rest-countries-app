import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CountryList from './pages/CountryList';
import CountryDetails from './pages/CountryDetails';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';

import ProtectedRoute from './pages/ProtectedRoute';

function App() {

    return (
        <div className="container mx-auto">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/countries" element={<CountryList />} />
                <Route path="/country/:code" element={<CountryDetails />} />

                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
            </Routes>
        </div>
    );
}

export default App;