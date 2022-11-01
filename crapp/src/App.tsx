import React from 'react';
import './App.css';
import Root from './layout/Root/Root';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AllCatsPage from './pages/AllCatsPage/AllCatsPage';
import FavoriteCatsPage from './pages/FavoriteCatsPage/FavoriteCatsPage';
import * as api_cats from './api/api-cats';
import CatProvider from './store/CatProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <AllCatsPage />,
        loader: () => api_cats.getAllCats(),
      },
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
    <CatProvider>
      <div className='app'>
        <RouterProvider router={router} />
      </div>
    </CatProvider>
  );
}

export default App;
