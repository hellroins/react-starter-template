import { lazy } from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
import Loadable from '../components/Loadable';

// dashboard routing
const Dashboard = Loadable(lazy(() => import('../pages/dashboard/presentation')));
const SamplePage = Loadable(lazy(() => import('../pages/sample-page/presentation')));

// utilities routing

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '/sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
