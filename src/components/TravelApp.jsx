import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const TravelApp = () => {
  return (
    <>

      <div className="bg-white min-h-screen min-h-screen flex items-center justify-center bg-gray-100">
        <div className=" relative flex flex-col justify-start pb-40">
          <div className="relative">
            <img
              src="/images/inspirete.png"
              alt="Travel"
              className="w-full h-64 object-cover w-[200px] h-[350px]"
            />
            <div className="absolute top-24 left-0 w-full h-full flex flex-col justify-center items-center text-white">
              <h1 className="text-3xl font-bold">Where are you going next?</h1>
            </div>
          </div>

          {/* Barra de búsqueda y botón */}
          <div className="relative -mt-12 mx-4 p-4 bg-white rounded-lg shadow-lg flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 border rounded-full focus:outline-none"
            />
            <button className="ml-2 p-2 bg-primaryBlue rounded-full">
              <FontAwesomeIcon icon={faArrowRight} style={{ color: "#fafafa", }} />
            </button>
            <div className=" relative text-center my-4">
              <span className="text-gray-500">or  </span>
              <button className="mt-2 px-4 py-2 bg-primaryBlue text-white rounded-full">
                Tell us about yourself
              </button>
            </div>
          </div>

          {/* Lista Recomendada */}
          <div className="px-4">
            <h2 className="text-xl font-bold mb-2">Recommended List</h2>
            <div className="flex space-x-4 overflow-x-auto">
              <div className="min-w-[100px] bg-white rounded-lg shadow-lg p-2">
                <img
                  src="/"
                  alt="Dubai"
                  className="w-full rounded-lg"
                />
                <h3 className="mt-2 text-center">Arab</h3>
                <p className="text-center text-gray-500">Dubai</p>
              </div>
              <div className="min-w-[120px] bg-white rounded-lg shadow-lg p-2">
                <img
                  src="/path/to/your/america-image.jpg"
                  alt="Los Angeles"
                  className="w-full rounded-lg"
                />
                <h3 className="mt-2 text-center">America</h3>
                <p className="text-center text-gray-500">Los Angeles</p>
              </div>
              {/* Añade más destinos aquí */}
            </div>
          </div>

          {/* Destinos Populares */}
          <div className="px-4 mt-4">
            <h2 className="text-xl font-bold mb-2">Popular Destination</h2>
            <div className="flex space-x-4 overflow-x-auto">
              <div className="min-w-[120px] bg-white rounded-lg shadow-lg p-2 ">
                <img
                  src="/path/to/your/japan-image.jpg"
                  alt="Japan"
                  className="w-full rounded-lg"
                />
                <h3 className="mt-2 text-center">Japan</h3>
              </div>
              <div className="min-w-[120px] bg-white rounded-lg shadow-lg p-2">
                <img
                  src="/path/to/your/france-image.jpg"
                  alt="France"
                  className="w-full rounded-lg"
                />
                <h3 className="mt-2 text-center">France</h3>
              </div>
              {/* Añade más destinos aquí */}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default TravelApp;