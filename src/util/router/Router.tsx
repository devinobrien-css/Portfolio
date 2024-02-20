import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Landing } from '../../pages/Landing/Landing';
import { Docs } from '../../pages/Docs/Docs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/docs',
    element: <Docs />,
    children: []
  }
]);

export const Router = () => {
  return (
    <RouterProvider router={router} />
  );
};