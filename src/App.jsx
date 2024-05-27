import {
  SignUpPage,
  SignInPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  SuccesfulPage,
  WorkList,
} from './index';

import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WorkList />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/forgot" element={<ForgotPasswordPage />} />
        <Route path="/reset" element={<ResetPasswordPage />} />
        <Route path="/succesful" element={<SuccesfulPage />} />
      </Routes>
    </>
  );
}

export default App;
