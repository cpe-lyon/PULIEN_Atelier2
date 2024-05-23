import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import PrivateRoute from './pages/PrivateRoute';
import Login from './pages/Login.tsx';
import CardPage from './pages/CardPage';
import UserPage from './pages/UserPage';
import Register from './pages/Register.tsx';
import AlreadyConnected from './pages/AlreadyConnected';
import { JSX } from 'react/jsx-runtime';


function App() {
  const wrapPrivateRoute = (element: JSX.Element) => {
    return (
      <PrivateRoute>
        {element}
      </PrivateRoute>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/authentified" element={<AlreadyConnected />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/card"/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/card" element={wrapPrivateRoute(<CardPage />)} />
        <Route path="/user" element={wrapPrivateRoute(<UserPage />)} />
      </Routes>
    </Router>
  );
}

export default App;