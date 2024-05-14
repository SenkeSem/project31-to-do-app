import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import SuccesfulPage from './pages/SuccesfulPage';
// import StartPage1 from './pages/StartPage1';
// import StartPage2 from './pages/StartPage2';
// import StartPage3 from './pages/StartPage3';

import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<StartPage3 />} /> */}
        {/* <Route path="/" element={<StartPage2 />} /> */}
        {/* <Route path="/" element={<StartPage1 />} /> */}
        <Route path="/" element={<SignUpPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/forgot" element={<ForgotPasswordPage />} />
        <Route path="/reset" element={<ResetPasswordPage />} />
        <Route path="/succesful" element={<SuccesfulPage />} />
      </Routes>
    </>
  );
}

export default App;
