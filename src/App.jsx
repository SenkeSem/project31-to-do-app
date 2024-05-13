import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';

import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/login" element={<SignInPage />} />
      </Routes>
    </>
  );
}

export default App;
