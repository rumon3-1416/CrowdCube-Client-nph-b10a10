import { createBrowserRouter } from 'react-router-dom';

import PrivateNavigator from './components/PrivateNavigator/PrivateNavigator';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home/Home';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import AllCampaigns from './pages/AllCampaigns/AllCampaigns';
import CampaignDetails from './pages/CampaignDetails/CampaignDetails';
import MyDonations from './pages/MyDonations/MyDonations';
import AddCampaign from './pages/AddCampaign/AddCampaign';
import MyCampaigns from './pages/MyCampaigns/MyCampaigns';
import UpdateCampaign from './pages/UpdateCampaign.jsx/UpdateCampaign';

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
        path: '/all_campaigns',
        element: <AllCampaigns />,
      },
      {
        path: '/campaigns/:id',
        element: (
          <PrivateNavigator>
            <CampaignDetails />
          </PrivateNavigator>
        ),
      },
      {
        path: '/add_campaign',
        element: (
          <PrivateNavigator>
            <AddCampaign />
          </PrivateNavigator>
        ),
      },
      {
        path: '/my_campaigns',
        element: (
          <PrivateNavigator>
            <MyCampaigns />
          </PrivateNavigator>
        ),
      },
      {
        path: '/update_campaign/:id',
        element: (
          <PrivateNavigator>
            <UpdateCampaign />
          </PrivateNavigator>
        ),
      },
      {
        path: '/my_donations',
        element: (
          <PrivateNavigator>
            <MyDonations />
          </PrivateNavigator>
        ),
      },
    ],
  },
]);

export default router;
