import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '@/modules';
import { CreateAccountPage, LogInPage } from '@/pages';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
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
