import {
  SignUpPage,
  SignInPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  SuccesfulPage,
} from './index';

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
