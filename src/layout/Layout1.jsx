import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/ui/navbar/Navbar";


const Layout1 = () => {
    const location = useLocation();

    const isHomePage = location.pathname === '/';

    return (
        <div>
            {!isHomePage && <Navbar />}
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout1;
