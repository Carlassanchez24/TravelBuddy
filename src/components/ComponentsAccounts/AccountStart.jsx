import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios';


function AccountStart() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post('http://127.0.0.1:8000/api/users/logout/');
            localStorage.removeItem('token'); 
            navigate('/login');  
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    return (

        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <div className="w-full max-w-xs p-8 bg-white shadow-md rounded-lg mt-24">
                <div className="flex flex-rowitems-center mt-4">
                    <h2 className="text-xl font-bold ">Aqua</h2>
                    <p className="text-gray-500 mt-8 -ml-12">View and edit your profile</p>
                    <img
                        className="w-20 h-20 rounded-full mb-2 ml-8 "
                        src="/images/agregar-usuario.png"

        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-xs p-8 mt-12 bg-white rounded-lg shadow-md">
                <div className="flex flex-col items-center">
                    <img
                        className="w-24 h-24 mb-4 rounded-full"
                        src="/path-to-avatar/aqua.png"

                        alt="User Avatar"
                    />

                </div>
                <div className="mt-20">
                    <div className="mb-4">
                        <label className="block text-gray-700">Username</label>
                        <p className="text-gray-900 ml-48 -mt-4">Aqua_KH</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <p className="text-gray-900 ml-28 -mt-4">aqua.kh@gmail.com</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 ">Password</label>
                        <p className="text-gray-900 ml-48 -mt-4">**********</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Avatar</label>
                        <p className="text-gray-900 ml-48 -mt-6">aqua.png</p>
                    </div>

                    <div className="flex items-center mb-4">
                        <p className=" mr-2">Edit Profile</p>
                        <FontAwesomeIcon icon={faGear} style={{ color: "#025a6e", }} className="text-blue-500 cursor-pointer hover:text-blue-700 ml-36"
                            onClick={() => navigate('/EditProfile')} />

                    </div>

                </div>
                <div className="mt-4">
                    <p className="-mb-4">Log out</p>
                    <FontAwesomeIcon icon={faChevronRight} style={{ color: "#025a6e", }} className="text-blue-500 cursor-pointer hover:text-blue-700 ml-60 mb-12"
                        onClick={() => navigate('/Welcome')} />

                    <button
                        className="flex items-center justify-center w-full py-2 text-white bg-blue-500 rounded-lg"
                        onClick={() => navigate('/EditProfile')}
                    >
                        Edit Profile
                        <svg
                            className="w-5 h-5 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 17l2 2m3-3l4-4m0 0a3.5 3.5 0 10-5-5L7 14l-3 3 4 4 3-3z"
                            />
                        </svg>
                    </button>
                </div>
                <div className="mt-6">
                    <button
                        className="w-full py-2 text-gray-700 bg-gray-300 rounded-lg"
                        onClick={handleLogout}
                    >
                        Log out
                    </button>

                </div>
            </div>
        </div>
    );
}

export default AccountStart;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGear, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// function AccountStart() {
//     const navigate = useNavigate();
//     const [profile, setProfile] = useState({
//         username: '',
//         email: '',
//         avatar: '',
//     });

//     useEffect(() => {
//         // Suponiendo que tienes un endpoint en tu API para obtener el perfil del usuario
//         const fetchProfile = async () => {
//             const response = await fetch('/api/profile');
//             const data = await response.json();
//             setProfile(data);
//         };

//         fetchProfile();
//     }, []);

//     return (
//         <div className="min-h-screen bg-gray-100 flex flex-col items-center">
//             <div className="w-full max-w-xs p-8 bg-white shadow-md rounded-lg mt-24">
//                 <div className="flex items-center mt-4">
//                     <h2 className="text-xl font-bold">{profile.username}</h2>
//                     <p className="text-gray-500 mt-8 ml-4">View and edit your profile</p>
//                     <img
//                         className="w-20 h-20 rounded-full mb-2 ml-8"
//                         src={profile.avatar}
//                         alt="User Avatar"
//                     />
//                 </div>
//                 <div className="mt-20">
//                     <div className="mb-4">
//                         <label className="block text-gray-700">Username</label>
//                         <p className="text-gray-900 ml-48 -mt-4">{profile.username}</p>
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700">Email</label>
//                         <p className="text-gray-900 ml-28 -mt-4">{profile.email}</p>
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 ">Password</label>
//                         <p className="text-gray-900 ml-48 -mt-4">**********</p>
//                     </div>
//                     <div className="flex items-center mb-4">
//                         <p className="mr-2">Edit Profile</p>
//                         <FontAwesomeIcon icon={faGear} className="text-blue-500 cursor-pointer hover:text-blue-700 ml-36" onClick={() => navigate('/EditProfile')} />
//                     </div>
//                 </div>
//                 <div className="mt-4">
//                     <p className="-mb-4">Log out</p>
//                     <FontAwesomeIcon icon={faChevronRight} className="text-blue-500 cursor-pointer hover:text-blue-700 ml-60 mb-12" onClick={() => navigate('/inspireme')} />
//                 </div>
//             </div>


// import React from 'react';

// function AccountStart({ userData }) {
//   return (
//     <div className="flex flex-col items-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-xs p-8 mt-12 bg-white rounded-lg shadow-md">
//         <div className="flex flex-col items-center">
//           <img
//             className="w-24 h-24 mb-4 rounded-full"
//             src={`/images/add-user.png${userData.avatar}`}
//             // /images/add-user.png
//             alt="User Avatar"
//           />
//           <h2 className="text-xl font-bold">{userData.userName}</h2>
//           <p className="text-gray-500">View and edit your profile</p>
//         </div>
//         <div className="mt-6">
//           <div className="mb-4">
//             <label className="block text-gray-700">Username</label>
//             <p className="text-gray-900">{userData.userName}</p>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <p className="text-gray-900">{userData.email}</p>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Avatar</label>
//             <p className="text-gray-900">{userData.avatar}</p>
//           </div>
//           <button
//             className="flex items-center justify-center w-full py-2 text-white bg-blue-500 rounded-lg"
//             // onClick={() => navigate('/EditProfile')}
//           >
//             Edit Profile
//             <svg
//               className="w-5 h-5 ml-2"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M11 17l2 2m3-3l4-4m0 0a3.5 3.5 0 10-5-5L7 14l-3 3 4 4 3-3z"
//               />
//             </svg>
//           </button>
//         </div>
//         <div className="mt-6">
//           <button className="w-full py-2 text-gray-700 bg-gray-300 rounded-lg">
//             Log out
//           </button>

//         </div>
//     );
// }

// export default AccountStart;