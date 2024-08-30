import { createBrowserRouter } from 'react-router-dom';
import Layout1 from '@/layout/Layout1';
import Home from '@/pages/Home';
import Welcome from '@/pages/Welcome';
import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';
import UnderConstruction from '@/components/UnderConstruction';
import TravelFilter from '@/pages/TravelFilter';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout1 />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'welcome',
                element: <Welcome />,
            },
            {
                path: 'login',
                element: <Login />,
                errorElement: <UnderConstruction />,
            },
            {
                path: 'signup',
                element: <SignUp/>,
                errorElement: <UnderConstruction />,
            },
            {
                path: 'travelfilter',
                element: <TravelFilter/>,
                errorElement: <TravelFilter />,
            },
        ],
    },
]);

export default router;