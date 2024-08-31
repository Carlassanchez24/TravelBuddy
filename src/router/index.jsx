import { createBrowserRouter } from 'react-router-dom';
import Layout1 from '@/layout/Layout1';
import Welcome from '@/pages/Welcome'
import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';
import UnderConstruction from '@/components/UnderConstruction';
import Inspireme from '@/pages/Inspireme';
import TravelFilter from '@/pages/TravelFilter';
import Home from '@/pages/Home';
import Account from '@/pages/Account';
import EditProfile from '@/components/ComponentsAccounts/EditProfile';
import AccountStart from '@/components/ComponentsAccounts/AccountStart';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout1 />,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: 'welcome',
                element: <Welcome/>
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
                path: 'account',
                element: <Account/>,
                errorElement: <UnderConstruction />,
            },
            {
                path: 'inspireme',
                element: <Inspireme/>,
            },
            {
                path: '*', 
                element: <UnderConstruction/>,
            },
            {
                path: 'travelfilter', 
                element: <TravelFilter/>,
            },
            {
                path: 'editProfile', 
                element: <EditProfile/>,
            },
            {
                path: 'accountStart', 
                element: <AccountStart/>,
            }
        ],
    },
]);

export default router;