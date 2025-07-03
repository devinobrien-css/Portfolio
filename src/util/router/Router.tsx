import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from 'react-router-dom';
import { ModernLanding } from '../../pages/Landing/ModernLanding';
import { Docs } from '../../pages/Docs/Docs';
import { Projects } from '../../pages/Projects/Projects';
import { Skills } from '../../pages/Skills/Skills';
import { ModernNavigation } from '../../components/ModernNavigation';
import { Personality } from '../../pages/Personality/Personality';
import { useEffect } from 'react';

const PageWithNav = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <ModernNavigation />
      {children}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PageWithNav>
        <ModernLanding />
      </PageWithNav>
    ),
  },
  {
    path: '/projects',
    element: (
      <PageWithNav>
        <Projects />
      </PageWithNav>
    ),
  },
  {
    path: '/skills',
    element: (
      <PageWithNav>
        <Skills />
      </PageWithNav>
    ),
  },
  {
    path: '/about',
    element: (
      <PageWithNav>
        <Personality />
      </PageWithNav>
    ),
  },
  {
    path: '/personality',
    element: (
      <PageWithNav>
        <Personality />
      </PageWithNav>
    ),
  },
  {
    path: '/docs',
    element: (
      <PageWithNav>
        <Docs />
      </PageWithNav>
    ),
    children: [],
  },
  {
    path: '*',
    element: (
      <PageWithNav>
        <ModernLanding />
      </PageWithNav>
    ),
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
