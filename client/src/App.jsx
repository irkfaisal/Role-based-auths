import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import PrivateRoute from './Auth/PrivateRoute';
import Content from './components/Content';
import AdminDashboard from './layouts/AdminDashboard/AdminDashboard.jsx';
import AddUserPage from './pages/AdminDashboard/UserCard/AddUserPage.jsx';
import AddRolePage from './pages/AdminDashboard/RoleCard/AddRolePage.jsx';
import AddPage from './pages/AdminDashboard/PageCard/AddPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* All private routes inside one wrapper */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />}>
            {/* Nested content routes under layout */}
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="conetnt" element={<Content />} />
            {/* add more pages here */}
            <Route path='user' element={<AddUserPage />} />
            <Route path='role' element={<AddRolePage />} />
            <Route path='page' element={<AddPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
