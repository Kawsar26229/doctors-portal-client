import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import About from '../../Pages/About/About';
import Appointment from '../../Pages/Appointment/Appointment';
import Contact from '../../Pages/Contact/Contact';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Reviews from '../../Pages/Reviews/Reviews';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/appointment',
        element: <Appointment></Appointment>,
      },
      {
        path: '/reviews',
        element: <Reviews></Reviews>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
    ],
  },
]);