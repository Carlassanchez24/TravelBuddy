
import React from 'react';
import { useNavigate } from 'react-router-dom';

function EditProfile() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <div className="w-full max-w-xs p-8 bg-white shadow-md rounded-lg mt-12">
                <button
                    className="text-blue-500"
                    onClick={() => navigate('/accountStart')}
                >
                    &larr; Back
                </button>
                <div className="flex flex-col items-center mt-4">
                    <img
                        className="w-24 h-24 rounded-full mb-4"
                        src="/images/add-user.png"
                        alt="User Avatar"
                    />
                    <h2 className="text-xl font-bold">Edit Profile</h2>
                </div>
                <form className="mt-6">
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
                        <label className="block text-gray-700">Avatar</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            defaultValue="aqua.png"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg"

                    >
                        Save Changes
                    </button>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg mt-2"
                    >
                        Delete Account
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditProfile;