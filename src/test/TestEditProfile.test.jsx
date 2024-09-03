import { render, screen, fireEvent} from '@testing-library/react';
import { vi } from 'vitest';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import EditProfile from '@/components/ComponentsAccounts/EditProfile';

// Mock de useNavigate
vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom'),
    useNavigate: vi.fn(),
}));

// Mock de Axios
vi.mock('axios');

describe('EditProfile Component', () => {
    let mockedNavigate;

    beforeEach(() => {
        mockedNavigate = vi.fn();
        useNavigate.mockReturnValue(mockedNavigate);
    });

    it('should render form elements correctly', () => {
        render(<EditProfile userData={{ username: 'Aqua_KH', email: 'aqua.kh@gmail.com', avatar: '/images/account1.png' }} />);
        
        
        expect(screen.getByText('Username')).toBeInTheDocument();
        expect(screen.getByText('Email')).toBeInTheDocument();
        expect(screen.getByText('Password')).toBeInTheDocument();
        expect(screen.getByText('Select Avatar')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Save Changes' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Delete Account' })).toBeInTheDocument();
    });

    it('should handle avatar selection', () => {
        render(<EditProfile userData={{ username: '', email: '', avatar: '/images/account1.png' }} />);

       
        const firstAvatar = screen.getByAltText('Selected Avatar'); 
        fireEvent.click(firstAvatar); 
        expect(screen.getByAltText('Selected Avatar')).toHaveAttribute('src', '/images/account1.png');
    });

    it('should navigate back to account start on back button click', () => {
        render(<EditProfile userData={{ username: 'Aqua_KH', email: 'aqua.kh@gmail.com', avatar: '/images/account1.png' }} />);

        
        const backButton = screen.getByText(/back/i);
        fireEvent.click(backButton);

        expect(mockedNavigate).toHaveBeenCalledWith('/accountStart');
    });

    it('should delete account when delete button is clicked', async () => {
        axios.delete.mockResolvedValueOnce({ status: 204 });

        render(<EditProfile userData={{ username: 'Aqua_KH', email: 'aqua.kh@gmail.com', avatar: '/images/account1.png' }} />);


    });
});