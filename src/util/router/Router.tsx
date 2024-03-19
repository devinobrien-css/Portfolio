import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Landing } from '../../pages/Landing/Landing';
import { Docs } from '../../pages/Docs/Docs';
import { Projects } from '../../pages/Projects/Projects';
import { Navigation } from '../../components/navigation/Navigation';
import { Personality } from '../../pages/Personality/Personality';

const PageWithNav = ({ children } : {
  children: React.ReactNode
}) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageWithNav><Landing /></PageWithNav>,
  },
  {
    path: '/projects',
    element:  <PageWithNav><Projects /></PageWithNav>,
  },
  {
    path: '/personality',
    element: <PageWithNav><Personality /></PageWithNav>,
  },
  {
    path: '/docs',
    element: <PageWithNav><Docs /></PageWithNav>,
    children: []
  }
]);

export const Router = () => {
  return (
    <RouterProvider router={router} />
  );
};