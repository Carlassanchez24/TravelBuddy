import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faRobot } from '@fortawesome/free-solid-svg-icons'; 

const Navbar = () => {
    return (
        <>
            <nav className="bg-[var(--card)] fixed bottom-0 left-0 w-full shadow-lg" aria-label="Main Navigation">
                <ul className="flex justify-around py-2">
                    <li className="flex flex-col items-center">
                        <NavLink 
                            to="/home" 
                            className={({ isActive }) => 
                                `flex flex-col items-center ${isActive ? 'text-[var(--primary-foreground)]' : ''}`}
                            aria-label="Home"
                        >
                            <FontAwesomeIcon icon={faHome} className="h-6 w-6 text-[var(--primary)]" aria-hidden="true" />
                            <span className="text-sm text-[var(--primary-foreground)] font-roboto">Home</span>
                        </NavLink>
                    </li>
                    <li className="flex flex-col items-center">
                        <NavLink 
                            to="/account" 
                            className={({ isActive }) => 
                                `flex flex-col items-center ${isActive ? 'text-[var(--primary-foreground)]' : ''}`}
                            aria-label="Account"
                        >
                            <FontAwesomeIcon icon={faUser} className="h-6 w-6 text-[var(--primary)]" aria-hidden="true" />
                            <span className="text-sm text-[var(--primary-foreground)] font-roboto">Account</span>
                        </NavLink>
                    </li>
                    <li className="flex flex-col items-center">
                        <NavLink 
                            to="/chatbot" 
                            className={({ isActive }) => 
                                `flex flex-col items-center ${isActive ? 'text-[var(--primary-foreground)]' : ''}`}
                            aria-label="Chatbot"
                        >
                            <FontAwesomeIcon icon={faRobot} className="h-6 w-6 text-[var(--primary)]" aria-hidden="true" />
                            <span className="text-sm text-[var(--primary-foreground)] font-roboto">Chatbot</span>
                        </NavLink>
                    </li>
                </ul>
            </nav> 
        </>
    );
};

export default Navbar;
