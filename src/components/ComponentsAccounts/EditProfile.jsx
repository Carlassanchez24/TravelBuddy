import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

function EditProfile() {
    const navigate = useNavigate();
    const [selectedAvatar, setSelectedAvatar] = useState('/images/agregar-usuario.png');
    const [avatarOptions, setAvatarOptions] = useState([
        '/images/account1.png',
        '/images/account2.png',
        '/images/account3.png',
        '/images/account4.png'
    ]);

    const handleAvatarSelect = (avatar) => {
        setSelectedAvatar(avatar);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <div className="w-full max-w-xs p-8 bg-white shadow-md rounded-lg mt-12">
                <button
                    className="text-blue-500"
                    onClick={() => navigate('/accountStart')}
                >
                    &larr; Back
                </button>

                <div className="flex flex-col items-center mt-2">
                    <h2 className="text-xl font-bold -ml-28 mt-6">Edit Profile</h2>
                    <img
                        className="w-24 h-24 rounded-full mb-4 ml-32 -mt-8"
                        src={selectedAvatar}
                        alt="Selected Avatar"
                    />
                </div>

                <form className="-mt-2">
                    <div className="mb-4">
                        <label className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            defaultValue="Aqua_KH"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            defaultValue="aqua.kh@gmail.com"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            defaultValue="**********"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Select Avatar</label>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {avatarOptions.map((avatar, index) => (
                                <img
                                    key={index}
                                    src={avatar}
                                    alt={`Avatar ${index + 1}`}
                                    className={`w-14 h-14 rounded-full cursor-pointer ${selectedAvatar === avatar ? 'border-4 border-blue-500' : 'border'}`}
                                    onClick={() => handleAvatarSelect(avatar)}
                                />
                            ))}
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg"
                    >
                        Save Changes
                    </Button>
                    <Button
                        type="button"
                        className="w-full bg-red-500 text-white py-2 rounded-lg mt-4"
                    >
                        Delete Account
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default EditProfile;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Button from '../ui/Button';

// function EditProfile() {
//     const navigate = useNavigate();
//     const [username, setUsername] = useState("Aqua_KH");
//     const [email, setEmail] = useState("aqua.kh@gmail.com");
//     const [selectedAvatar, setSelectedAvatar] = useState('/images/agregar-usuario.png');
//     const [avatarOptions] = useState([
//         '/images/avatar1.png',
//         '/images/avatar2.png',
//         '/images/avatar3.png',
//         '/images/avatar4.png',
//     ]);

//     const handleSaveChanges = async () => {
//         // Suponiendo que tienes un endpoint en tu API para actualizar el perfil
//         const response = await fetch('/api/profile', {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ username, email, avatar: selectedAvatar }),
//         });

//         if (response.ok) {
//             navigate('/accountStart');
//         } else {
//             // Manejar errores si la actualización falla
//             console.error("Error al actualizar el perfil");
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 flex flex-col items-center">
//             <div className="w-full max-w-xs p-8 bg-white shadow-md rounded-lg mt-12">
//                 <button className="text-blue-500" onClick={() => navigate('/accountStart')}>
//                     &larr; Back
//                 </button>

//                 <div className="flex flex-col items-center mt-4">
//                     <h2 className="text-xl font-bold">Edit Profile</h2>
//                     <img className="w-24 h-24 rounded-full mb-4" src={selectedAvatar} alt="Selected Avatar" />
//                 </div>

//                 <form className="mt-6" onSubmit={(e) => { e.preventDefault(); handleSaveChanges(); }}>
//                     <div className="mb-4">
//                         <label className="block text-gray-700">Username</label>
//                         <input
//                             type="text"
//                             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700">Email</label>
//                         <input
//                             type="email"
//                             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                     </div>

//                     <div className="mb-4">
//                         <label className="block text-gray-700">Select Avatar</label>
//                         <div className="flex flex-wrap gap-4">
//                             {avatarOptions.map((avatar, index) => (
//                                 <img
//                                     key={index}
//                                     src={avatar}
//                                     alt={`Avatar ${index + 1}`}
//                                     className={`w-16 h-16 rounded-full cursor-pointer ${selectedAvatar === avatar ? 'border-4 border-blue-500' : 'border'}`}
//                                     onClick={() => setSelectedAvatar(avatar)}
//                                 />
//                             ))}
//                         </div>
//                     </div>

//                     <Button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">
//                         Save Changes
//                     </Button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default EditProfile;