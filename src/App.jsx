import {
  SignUpPage,
  SignInPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  SuccesfulPage,
  WorkList,
  ProjectsPage,
  QuickPage,
  ProfilePage,
  CreateNotePage,
  CreateCheckList,
} from './index';

import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WorkList />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/quick" element={<QuickPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/forgot" element={<ForgotPasswordPage />} />
        <Route path="/reset" element={<ResetPasswordPage />} />
        <Route path="/succesful" element={<SuccesfulPage />} />
        <Route path="/note" element={<CreateNotePage />} />
        <Route path="/checklist" element={<CreateCheckList />} />
      </Routes>
    </>
  );
}

export default App;
