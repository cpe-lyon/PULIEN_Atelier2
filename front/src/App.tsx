import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './pages/PrivateRoute';
import Login from './pages/Login';
import CardPage from './pages/CardPage';
import UserPage from './pages/UserPage';


function App() {
  const wrapPrivateRoute = (element) => {
    return (
      <PrivateRoute>
        {element}
      </PrivateRoute> 
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={wrapPrivateRoute(<CardPage />)} />
        <Route path="/login" element={<Login />} />
        <Route path="/card/*" element={wrapPrivateRoute(<CardPage />)} />
        <Route path="/user/*" element={wrapPrivateRoute(<UserPage />)} />
      </Routes>
    </Router>
  );
}

export default App;