import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './components/Main';
import Auth from './components/Auth';
import Registration from './components/Registration';
import Home from './components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: 'users/sign_in',
    element: <Auth />,
  },
  { path: 'users/sign_up', element: <Registration /> },
  { path: 'home', element: <Home /> },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

