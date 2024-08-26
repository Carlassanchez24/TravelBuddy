import { createBrowserRouter } from 'react-router-dom';
import App from '@/App'
import Home from '@/pages/Home';
import Page1 from '@/pages/Page1';
import Page2 from '@/pages/Page2';
import Page3 from '@/pages/Page3';
import Layout1 from '@/layout/Layout1';
import Layout2 from '@/layout/Layout2';
import UnderConstruction from '@/components/UnderConstruction';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'page1',
                element: <Page1/>,
            },
            {
                path: 'page2', //Log in
                element: <Page2 />,
                errorElement: <UnderConstruction />
            },
            {
                path: 'page3', // Create Account
                element: <Page3 />,
                errorElement: <UnderConstruction />
            },
            {
                path: 'layout1',
                element: <Layout1/>,
            },
            {
                path: 'layout2',
                element: <Layout2/>,
            },
            {
                path: '*', // Welcome
                element: <Home />,
            },
        ],
    },
    
]);

export default router;