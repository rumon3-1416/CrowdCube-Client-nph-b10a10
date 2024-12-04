import { createBrowserRouter } from 'react-router-dom';

import PrivateNavigator from './components/PrivateNavigator/PrivateNavigator';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home/Home';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import UpdateProfile from './pages/Authentication/UpdateProfile';
import ResetPassword from './pages/Authentication/ResetPassword';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/updateprofile',
        element: (
          <PrivateNavigator>
            <UpdateProfile />
          </PrivateNavigator>
        ),
      },
      {
        path: 'resetpassword',
        element: <ResetPassword />,
      },
    ],
  },
]);

export default router;
