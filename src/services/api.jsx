
import axios from "axios";


const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api/users';




const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});


export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login/`, {
            email,
            password
        });
        return response.data;
    } catch (error) {
        return new Error(error.response?.data?.error || 'An error occurred');
    }
};


export const registerUser = async (username, email, password) => {
    try {
        const response = await apiClient.post('/register/', { username, email, password });
        return response.data;
    } catch (error) {
        return new Error(error.response?.data?.error || 'An error occurred');
    }
};
