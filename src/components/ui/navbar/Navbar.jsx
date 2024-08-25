import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, MessageSquare } from 'feather-icons-react';

const NavBar = () => {
    return (
        <nav className="bg-card fixed bottom-0 left-0 w-full shadow-lg" aria-label="Main Navigation">
            <ul className="flex justify-around py-2">
                <li className="flex flex-col items-center group">
                    <NavLink 
                        to="/home" 
                        className={({ isActive }) => 
                            `flex flex-col items-center ${isActive ? 'text-primary-foreground' : ''} transition-colors duration-300`}
                        aria-label="Home"
                    >
                        <Home className="h-6 w-6 text-accentBlack group-hover:text-primaryBlue transition-colors duration-300" />
                        <span className="text-sm text-accentBlack group-hover:text-primaryBlue transition-colors duration-300 font-roboto">Home</span>
                    </NavLink>
                </li>
                <li className="flex flex-col items-center group">
                    <NavLink 
                        to="/account" 
                        className={({ isActive }) => 
                            `flex flex-col items-center ${isActive ? 'text-primary-foreground' : ''} transition-colors duration-300`}
                        aria-label="Account"
                    >
                        <User className="h-6 w-6 text-accentBlack group-hover:text-primaryBlue transition-colors duration-300" />
                        <span className="text-sm text-accentBlack group-hover:text-primaryBlue transition-colors duration-300 font-roboto">Account</span>
                    </NavLink>
                </li>
                <li className="flex flex-col items-center group">
                    <NavLink 
                        to="/chatbot" 
                        className={({ isActive }) => 
                            `flex flex-col items-center ${isActive ? 'text-primary-foreground' : ''} transition-colors duration-300`}
                        aria-label="Chatbot"
                    >
                        <MessageSquare className="h-6 w-6 text-accentBlack group-hover:text-primaryBlue transition-colors duration-300" />
                        <span className="text-sm text-accentBlack group-hover:text-primaryBlue transition-colors duration-300 font-roboto">Chatbot</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
