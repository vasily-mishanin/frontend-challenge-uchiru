import React from 'react';
import './App.css';
import Root from './layout/Root/Root';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import AllCatsPage from './pages/AllCatsPage/AllCatsPage';
import FavoriteCatsPage from './pages/FavoriteCatsPage/FavoriteCatsPage';
import * as api_cats from './api/api-cats';
import CatProvider from './store/CatProvider';

// createBrowserRouter - doesn't work with gh-pages
const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <AllCatsPage />,
        loader: () => api_cats.fetchCats(),
      },
      {
        path: 'all-cats',
        element: <AllCatsPage />,
        loader: () => api_cats.fetchCats(),
      },
      { path: 'favorite-cats', element: <FavoriteCatsPage /> },
    ],
  },
]);

function App() {
  return (
    <CatProvider>
      <div className='app'>
        <RouterProvider router={router} />
      </div>
    </CatProvider>
  );
}

export default App;
