import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
function AccountStart() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-xs p-8 mt-24 bg-white rounded-lg shadow-md">
                <div className="flex mt-4 flex-rowitems-center">
                    <h2 className="text-xl font-bold ">Aqua</h2>
                    <p className="mt-8 -ml-12 text-gray-500">View and edit your profile</p>
                    <img
                        className="w-20 h-20 mb-2 ml-8 rounded-full "
                        src="/images/agregar-usuario.png"
                        alt="User Avatar"
                    />

                </div>
                <div className="mt-20">
                    <div className="mb-4">
                        <label className="block text-gray-700">Username</label>
                        <p className="ml-48 -mt-4 text-gray-900">Aqua_KH</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <p className="-mt-4 text-gray-900 ml-28">aqua.kh@gmail.com</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 ">Password</label>
                        <p className="ml-48 -mt-4 text-gray-900">**********</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Avatar</label>
                        <p className="ml-48 -mt-6 text-gray-900">aqua.png</p>
                    </div>

                    <div className="flex items-center mb-4">
                        <p className="mr-2 ">Edit Profile</p>
                        <FontAwesomeIcon icon={faGear} style={{ color: "#025a6e", }} className="text-blue-500 cursor-pointer hover:text-blue-700 ml-36"
                            onClick={() => navigate('/EditProfile')} />

                    </div>
                </div>
                <div className="mt-4">
                    <p className="-mb-4">Log out</p>
                    <FontAwesomeIcon icon={faChevronRight} style={{ color: "#025a6e", }} className="mb-12 text-blue-500 cursor-pointer hover:text-blue-700 ml-60"
                        onClick={() => navigate('/Welcome')} />
                </div>
            </div>
        </div>
    );
}

export default AccountStart;


