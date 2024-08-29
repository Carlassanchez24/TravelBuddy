import { createBrowserRouter } from 'react-router-dom';
import Layout1 from '@/layout/Layout1';
import Home from '@/pages/Home';
import Welcome from '@/pages/Welcome';
import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';
import UnderConstruction from '@/components/UnderConstruction';
import RegisterTest from '@/components/RegisterTest';



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
                path: 'register-test',  
                element: <RegisterTest />, 
            },
        ],
    },
]);

export default router;