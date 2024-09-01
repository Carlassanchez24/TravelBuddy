import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CardsTravel from './CardsTravel';
import CardsDestination from './CardsDestination';


const TravelApp = () => {
  return (
    <>

      <div className="relative mx-0 p-0 rounded-lg shadow-xl flex flex-col items-center bg-gray-100">
        
        <div className=" relative flex flex-col justify-start pb-40">
          <div className="relative">
            <img
              src="/images/inspirete.png"
              alt="Travel"
              className="w-full h-auto object-cover rounded-t-lg"
            />
            <div className="absolute top-32 left-0 w-full h-full flex flex-col justify-center items-center text-white">
              <h1 className="text-2xl font-bold">Where are you going next?</h1>
            </div>
          </div>

          <div className="relative -mt-12 mx-4 p-4 rounded-lg shadow-lg flex flex-col items-center bg-gray-100">
            <div className="flex items-center w-full">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 border rounded-full focus:outline-none"
              />
              <button className="ml-2 p-2 bg-primaryBlue rounded-full">
                <FontAwesomeIcon icon={faArrowRight} style={{ color: "#fafafa" }} />
              </button>
            </div>

            <div className="text-center my-4">
              <span className="text-gray-500">or</span>
            </div>
            <button className="mt-2 px-4 py-2 bg-primaryBlue text-white rounded-full">
              Tell us about yourself
            </button>

          </div>

          {/* Lista Recomendada */}
          <div className="px-4">
            <h2 className="text-xl font-bold mb-2">Recommended List</h2>
            <div className="flex space-x-4 overflow-x-auto">
              <CardsTravel
                image="/images/photo1.png"
                title="Dubai"
                description="Arab"
              />
              <CardsTravel
                image="/images/photo2.png"
                title="America"
                description="Los Angeles"
              />
              <CardsTravel
                image="/images/photo3.png"
                title="Estanbull"
                description="Turkey"
              />

            </div>
          </div>

          {/* Destinos Populares */}
          <div className="px-4 mt-4">
            <h2 className="text-xl font-bold mt-2">Popular Destination</h2>
            <div className="flex space-x-4 overflow-x-auto ">
             
              <CardsDestination
              image="/images/photo1.png" 
              altText="Japan" 
              title="Japan" 
              
              />
               <CardsDestination
              image="/images/photo1.png" 
              altText="Japan" 
              title="Japan" 
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default TravelApp;