import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const PhotoSearch = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [randomImages, setRandomImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchRandomImages();
  }, []);

  const fetchRandomImages = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('http://localhost:8000/api/users/images/search/?query=Spain tourism');
      const data = response.data;
      if (Array.isArray(data) && data.length > 0) {
        setRandomImages(data.slice(0, 10)); 
      } else {
        setError('No se encontraron imágenes aleatorias.');
      }
    } catch (error) {
      setError('Error al buscar imágenes aleatorias.');
      console.error('Error al buscar imágenes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!query) return;

    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`http://localhost:8000/api/users/images/search/?query=${query}`);
      const data = response.data;
      if (Array.isArray(data) && data.length > 0) {
        setImages(data);
      } else {
        setError('No se encontraron resultados para la búsqueda.');
      }
    } catch (error) {
      setError('Error al buscar imágenes.');
      console.error('Error al buscar imágenes:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

      <div className="relative mx-0 p-0 rounded-lg shadow-xl flex flex-col items-center bg-gray-100">
        {/* Imagen de Fondo Expandida */}
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
                value={query}
                placeholder="Search"
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-4 py-2 border rounded-full focus:outline-none"
              />
              <button  onClick={handleSearch} className="ml-2 p-2 bg-primaryBlue rounded-full">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.length > 0 ? (
            images.map((image, index) => (
              <div key={index} className="text-center">
                <img src={image.url} alt={image.name} className="w-full h-48 object-cover rounded-lg shadow-md" />
                <p className="mt-2 text-sm font-semibold">{image.name}</p>
              </div>
            ))
          ) : (
            randomImages.map((image, index) => (
              <div key={index} className="text-center">
                <img src={image.url} alt={image.name} className="w-full h-48 object-cover rounded-lg shadow-md" />
                <p className="mt-2 text-sm font-semibold">{image.name}</p>
              </div>
            ))
          )}
        </div>
          </div>

          </div>
      </div>
    </>
      );
    };

export default PhotoSearch;
