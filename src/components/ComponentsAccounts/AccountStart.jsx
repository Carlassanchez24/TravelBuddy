import React from 'react';
import { useNavigate } from 'react-router-dom';

function AccountStart() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <div className="w-full max-w-xs p-8 bg-white shadow-md rounded-lg mt-12">
                <div className="flex flex-col items-center">
                    <img
                        className="w-24 h-24 rounded-full mb-4"
                        src="/path-to-avatar/aqua.png"
                        alt="User Avatar"
                    />
                    <h2 className="text-xl font-bold">Aqua</h2>
                    <p className="text-gray-500">View and edit your profile</p>
                </div>
                <div className="mt-6">
                    <div className="mb-4">
                        <label className="block text-gray-700">Username</label>
                        <p className="text-gray-900">Aqua_KH</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <p className="text-gray-900">aqua.kh@gmail.com</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <p className="text-gray-900">**********</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Avatar</label>
                        <p className="text-gray-900">aqua.png</p>
                    </div>
                    <button
                        className="w-full bg-blue-500 text-white py-2 rounded-lg flex items-center justify-center"
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
                    <button className="w-full bg-gray-300 text-gray-700 py-2 rounded-lg"onClick={() => navigate('/inspireme')}>
                      
                        Log out
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AccountStart;

// import React from 'react';

// function AccountStart({ userData }) {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center">
//       <div className="w-full max-w-xs p-8 bg-white shadow-md rounded-lg mt-12">
//         <div className="flex flex-col items-center">
//           <img
//             className="w-24 h-24 rounded-full mb-4"
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
//             className="w-full bg-blue-500 text-white py-2 rounded-lg flex items-center justify-center"
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
//           <button className="w-full bg-gray-300 text-gray-700 py-2 rounded-lg">
//             Log out
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AccountStart;