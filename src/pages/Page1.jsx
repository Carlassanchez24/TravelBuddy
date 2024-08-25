import { useNavigate } from 'react-router-dom';
import Button from "@/components/ui/Button";

const Page1 = () => {
  const backgroundImage = '/images/girl.png';
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 bg-backgroundGray">
      <div className="relative flex flex-col items-center" style={{ top: '-50px' }}>
        <img
          src={backgroundImage}
          alt="Travel"
          className="w-[369px] h-[369px] mb-4"
        />
        <h1 className="mb-4 text-3xl font-bold text-center text-primaryBlue">Plan your trip</h1>
        <p className="mb-8 text-xs text-center text-accentBlack">
          Custom and fast planning <br />
          with a low price
        </p>
      </div>
      <div className="flex flex-col items-center w-full">
        <Button className="w-[334px] mb-4 font-roboto" onClick={() => navigate('/page2')}>Log in</Button>
        <Button className="text-black w-[334px] h-[50px] rounded-full text-16 bg-secondaryWhite shadow-lg font-roboto" onClick={() => navigate('/page3')}>
          Create Account
        </Button>
      </div>
    </div>
  );
};

export default Page1;
