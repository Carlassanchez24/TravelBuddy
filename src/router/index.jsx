import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/Home';
import Page1 from '@/pages/Page1';
import Page2 from '@/pages/Page2';
import Page3 from '@/pages/Page3';
import UnderConstruction from '@/components/UnderConstruction';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/page1', // Welcome
        element: <Page1 />,
    },
    {
        path: '/page2', //Log in
        element: <Page2 />,
        errorElement: <UnderConstruction />
    },
    {
        path: '/page3', // Create Account
        element: <Page3 />,
        errorElement: <UnderConstruction />
    },
]);

export default router;