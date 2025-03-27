import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Layout from './Layout/Layout';
import { Home } from './Page/Home';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
