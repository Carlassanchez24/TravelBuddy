import { useNavigate } from 'react-router-dom';
import Button from "@/components/ui/Button";


const Home = () => {
    const navigate = useNavigate();

    const handleExplore = () => {
        navigate('/login'); // Cambia '/login' a la ruta correspondiente en tu aplicación
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center bg-backgroundGray">
            <h1 className="font-bold text-46 text-primaryBlue">Travel Buddy</h1>
            <p className="mb-8 text-16 text-neutralGray">
                Plan your next adventure with ease.
            </p>
            <Button className="mt-4" onClick={handleExplore}>
                Start Exploring!
            </Button>
        </div>
    );
};

export default Home;