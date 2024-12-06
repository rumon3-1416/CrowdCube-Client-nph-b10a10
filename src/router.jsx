import { createBrowserRouter } from 'react-router-dom';

import PrivateNavigator from './components/PrivateNavigator/PrivateNavigator';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home/Home';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import UpdateProfile from './pages/Authentication/UpdateProfile';
import ResetPassword from './pages/Authentication/ResetPassword';
import AllCampaigns from './pages/AllCampaigns/AllCampaigns';
import CampaignDetails from './pages/CampaignDetails/CampaignDetails';

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
        path: '/campaigns',
        element: <AllCampaigns />,
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
        path: '/campaign/:id',
        element: <CampaignDetails />,
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
