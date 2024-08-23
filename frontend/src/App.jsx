import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from "./pages/About";
import SearchResults from "./pages/SearchResults";
import EmployerDashboard from "./pages/EmployerDashboard";
import CenterButtonsPage from "./pages/option";
import Login from "./pages/Login";
import DashboardPage from "./pages/DashboardPage";
import Services from "./pages/services";



function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/search-results" element={<SearchResults/>} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/option" element={<CenterButtonsPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/services" element={<Services />} />
        </Routes>
        </BrowserRouter>
    );
}

export default App