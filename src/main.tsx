import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './error-page';
import Finder from './routes/finder';
import Home from './routes/home';
import Root from './routes/root';
import Saved from './routes/saved';
import ShowDetails from './routes/show-details';
import ShowForm from './routes/show-form';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'finder',
        element: <Finder />,
      },
      {
        path: 'show-form',
        element: <ShowForm />,
      },
      {
        path: 'saved',
        element: <Saved />,
      },
      {
        path: '/saved/:id',
        element: <ShowDetails />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
