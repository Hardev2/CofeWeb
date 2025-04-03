import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Page/Home';
import About from './Page/About';
import Menu from './Page/Menu';
import Store from './Page/Store';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/store' element={<Store />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
