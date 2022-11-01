import React from 'react';
import './App.css';
import Root from './layout/Root/Root';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AllCatsPage from './pages/AllCatsPage/AllCatsPage';
import FavoriteCatsPage from './pages/FavoriteCatsPage/FavoriteCatsPage';
import * as api_cats from './api/api-cats';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      // {
      //   path: '/',
      //   element: <AllCatsPage />,
      // },
      {
        path: 'all-cats',
        element: <AllCatsPage />,
        loader: () => api_cats.getAllCats(),
      },
      { path: 'favorite-cats', element: <FavoriteCatsPage /> },
    ],
  },
]);

function App() {
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
