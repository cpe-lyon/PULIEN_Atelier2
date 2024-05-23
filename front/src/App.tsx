import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import PrivateRoute from './pages/PrivateRoute';
import Login from './pages/Login';
import CardPage from './pages/CardPage';
import Register from './pages/Register';
import AlreadyConnected from './pages/AlreadyConnected';
import { JSX } from 'react/jsx-runtime';
import Marketplace from './pages/Marketplace';


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
        <Route path="/marketplace" element={wrapPrivateRoute(<Marketplace />)} />
      </Routes>
    </Router>
  );
}

export default App;