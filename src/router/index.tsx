import App from '@/App';
import { createHashRouter } from 'react-router-dom';
import { ErrorPage, MainPage, ProfilePage, SignInPage, SignUpPage } from '@/pages';
import ProjectList from '@/components/Profile/ProfileContent/ProjectList';
import ProjectForm from '@/components/forms/ProjectForm';
import Project from '@/components/Profile/ProfileContent/Project';

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'sign-up',
        element: <SignUpPage />,
      },
      {
        path: 'sign-in',
        element: <SignInPage />,
      },
    ],
  },
  {
    path: 'profile',
    element: <ProfilePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'projects',
        element: <ProjectList />,
      },
      {
        path: 'projects/:projectId',
        element: <Project />,
      },
      {
        path: 'projects-form',
        element: <ProjectForm />,
      },
    ],
  },
]);
