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
  StartPage1,
  StartPage2,
  StartPage3,
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
        <Route path="/start1" element={<StartPage1 />} />
        <Route path="/start2" element={<StartPage2 />} />
        <Route path="/start3" element={<StartPage3 />} />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<WorkList />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/quick" element={<QuickPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/task" element={<CreateTaskPage />} />
          <Route path="/task/:taskId" element={<ViewTaskPage />} />
          <Route path="/note" element={<CreateNotePage />} />
          <Route path="/checklist" element={<CreateCheckList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
