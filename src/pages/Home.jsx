import { useNavigate } from 'react-router-dom';
import Button from "@/components/ui/Button";
const homeImage = '/images/home.png';

const Home = () => {
    const navigate = useNavigate();

    const handleExplore = () => {
        navigate('page1'); 
    };

    return (
        <div 
            className="relative flex flex-col items-center justify-center min-h-screen p-4 text-center bg-center bg-cover"
            style={{ backgroundImage: `url(${homeImage})` }}>
                <h1 className="text-5xl font-bold text-center font-roboto text-primaryBlue">Travel Buddy</h1>
                <p className="mb-8 text-46 text-accentBlack">
                    Plan your next adventure with ease.
                </p>
                <Button className="absolute w-full py-3 mt-4 font-semibold rounded-full text-16 text-secondaryWhite bg-primaryBlue bottom-[calc(5rem)]" onClick={handleExplore}>
                    Start Exploring!
                </Button>
        </div>
    );
};

export default Home;
