import { useNavigate } from 'react-router-dom';
import Button from "@/components/ui/Button";
import Navbar from "../components/ui/navbar/Navbar.jsx"
const homeImage = '/images/home.png';


const Home = () => {
    const navigate = useNavigate();

    const handleExplore = () => {
        navigate('page1'); 
    };

    return (
        <>
        <Navbar/>
        <div className="flex flex-col items-center justify-center min-h-screen text-center bg-backgroundGray">
            
            <h1 className="font-bold text-46 text-primaryBlue">Travel Buddy</h1>
            <p className="mb-8 text-16 text-neutralGray">
                Plan your next adventure with ease.
            </p>
            <Button className="mt-4" onClick={handleExplore}>
                Start Exploring!
            </Button>
        <div 
            className="relative flex flex-col items-center justify-center min-h-screen p-4 text-center bg-center bg-cover"
            style={{ backgroundImage: `url(${homeImage})` }}>
                <div className="flex flex-col items-center pt-24"> 
                <h1 className="mb-4 text-5xl font-bold font-roboto text-primaryBlue">Travel Buddy</h1>
                <p className="text-xs text-accentBlack">
                    Plan your next adventure with ease.
                </p>
                </div>
                <div className="flex-grow"></div>
                <Button className="absolute w-full py-3 mt-4 font-semibold rounded-full text-16 text-secondaryWhite bg-primaryBlue bottom-[calc(5rem)]" onClick={handleExplore}>
                    Start Exploring!
                </Button>
        </div>
        </>
    );
};

export default Home;
