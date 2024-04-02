import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route,RouterProvider , createBrowserRouter } from 'react-router-dom';
import UserProvider from './context/userContext';
import ErrorPage from './pages/ErrorPage';
import Layout from './Components/Layout';
import Dashboard from './pages/Dashboard';
import DocumentEditor from './pages/DocumentEditor';
import DocumentManagement from './pages/DocumentManagement';
import DocumentTracking from './pages/DocumentTracking';
import HelpandSupport from './pages/HelpandSupport';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import UserProfile from './pages/UserProfile';
import UserSetting from './pages/UserSetting';
import './index.css';



const router = createBrowserRouter( [{
  path: '/',
  element: <Layout />,
  errorElement: <ErrorPage />,
  children: [
    { index: true, element: <Homepage /> },
    { path: "login", element: <Login /> },
    { path: "signup", element: <SignUp /> },
    { path: "profile/:id", element: <UserProfile /> },
    { path: "profile/:id/setting", element: <UserSetting /> },
    { path: "profile/:id/dashboard", element: <Dashboard /> },
    { path: "help", element: <HelpandSupport /> },
    { path: "document", element: <DocumentManagement /> },
    { path: "document-track", element: <DocumentTracking /> },
    { path: "editor", element: <DocumentEditor /> },
  ]
}]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
    <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
  
);

