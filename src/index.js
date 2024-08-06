import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/Home';
import Detail from './pages/Detail';
import Search from './pages/Search';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Popular from './pages/Popular';
import { StoreProvider } from './redux/StoreProvider';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search/:name",
    element: <Search />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "/popular",
    element: <Popular />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </StoreProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
