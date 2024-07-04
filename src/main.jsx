import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import Profile from './components/Profile.jsx';
import Settings from './components/settings.jsx';
import Errorpage from './components/Errorpage.jsx'
import User from './components/users.jsx';
import UserProfile from './components/user-profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Errorpage />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/profile",
    element: <Profile />,
    children: [
      {
        path: "/profile/:profileId",
        element: <Profile />
      }
    ]
  },
  {
    path:"/user-profile",
    element: <UserProfile/>
},
  {
      path:"/users",
      element: <User/>
  },
  {
    path: "/settings",
    element: <Settings />
  },
  {
    path: "/settings/:settingsId",
    element: <Settings />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
