import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Layout } from '@/modules';
import { CreateAccountPage, LogInPage } from '@/pages';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/log-in" />,
      },
      {
        path: '/create-account',
        element: <CreateAccountPage />,
      },
      {
        path: '/log-in',
        element: <LogInPage />,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
