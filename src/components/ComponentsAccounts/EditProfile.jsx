import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import PropTypes from 'prop-types';

function EditProfile({ userData }) {  
    const navigate = useNavigate();
    const username = userData?.username; 


    const handleDelete = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('No token found');
                return;
            }
    
            console.log('Username to delete:', username);

            
            const response = await axios.delete(`http://127.0.0.1:8000/api/users/delete/${username}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 204) {
                console.log('Account deleted successfully');
                localStorage.removeItem('token');
                navigate('/signup');
            } else {
                console.error('Failed to delete account:', response.data);
            }
        } catch (error) {
            console.error('Error deleting account:', error);
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-xs p-8 mt-12 bg-white rounded-lg shadow-md">
                <button
                    className="text-blue-500"
                    onClick={() => navigate('/accountStart')}
                >
                    &larr; Back
                </button>
                <div className="flex flex-col items-center mt-4">
                    <img
                        className="w-24 h-24 mb-4 rounded-full"
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
                            defaultValue={username || ""}  
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            defaultValue={userData?.email || ""}  
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            defaultValue=""
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Avatar</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            defaultValue={userData?.avatar || ""}  
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-blue-500 rounded-lg"
                    >
                        Save Changes
                    </button>
                    <button
                        type="button" 
                        className="w-full py-2 mt-2 text-white bg-red-500 rounded-lg"
                        onClick={handleDelete} 
                    >
                        Delete Account
                    </button>
                </form>
            </div>
        </div>
    );
}

EditProfile.propTypes = {
    userData: PropTypes.shape({
        username: PropTypes.string,
        email: PropTypes.string,
        avatar: PropTypes.string,
    })
};

export default EditProfile;
