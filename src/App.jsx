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
  CreateTaskPage,
  ViewTaskPage,
} from './index';

import { Routes, Route } from 'react-router-dom';

import './App.css';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/forgot" element={<ForgotPasswordPage />} />
        <Route path="/succesful" element={<SuccesfulPage />} />
        <Route path="/reset" element={<ResetPasswordPage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<WorkList />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/quick" element={<QuickPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/task" element={<CreateTaskPage />} />
          <Route path="/note" element={<CreateNotePage />} />
          <Route path="/checklist" element={<CreateCheckList />} />
          <Route path="/view" element={<ViewTaskPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
